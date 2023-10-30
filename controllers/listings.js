const Listing = require("../models/listing");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const Review = require("../models/review");
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

module.exports.index = async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
};

module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

module.exports.showListing = async (req, res) => {
  let { id } = req.params;
  const listings = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listings) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  res.render("listings/show.ejs", { listings });
};

module.exports.createListing = async (req, res, next) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.body.listing.location,
      limit: 1,
    })
    .send();

  let url = req.file.path;
  let filename = req.file.filename;
  console.log(url, "..", filename);
  const newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };

  newListing.geometry = response.body.features[0].geometry;
  console.log(newListing);
  let savedListing = await newListing.save();
  req.flash("success", "New Listing Created");
  res.redirect("/listings");
};

module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing you requested for does not exist!");
    res.redirect("/listings");
  }
  let orginalImageUrl = listing.image.url;
  orginalImageUrl = orginalImageUrl.replace("/upload", "/upload/w_250");
  res.render("listings/edit.ejs", { listing, orginalImageUrl });
};

module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(id, {
    ...req.body.listing,
  });
  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = { url, filename };
    await listing.save();
  }

  req.flash("success", "New Edited Succesfully");
  res.redirect(`/listings/${id}`);
};

module.exports.destroyListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing Deleted Succesfully");
  res.redirect(`/listings`);
};

module.exports.categoryListing = async (req, res) => {
  let { id } = req.params;
  if (id === "trending") {
    const allReview = await Review.find({ rating: { $in: [4, 5] } });
    let allReviewId = "";
    for (let i = 0; i < allReview.length; ++i) {
      allReviewId = allReviewId + "ObjectId('" + allReview[i]._id + "'),";
    }
    console.log(allReviewId);
    const allListings = await Listing.find({ reviews: { $in: allReview } });
    console.log(allListings);
    res.render("listings/index.ejs", { allListings });
  } else {
    const allListings = await Listing.find({ category: id });
    res.render("listings/index.ejs", { allListings });
  }
};

module.exports.searchListing = async (req, res) => {
  let response = await geocodingClient
    .forwardGeocode({
      query: req.query.destination,
      limit: 1,
    })
    .send();
  let newgeometry = response.body.features[0].geometry;
  const allListings = await Listing.find({ geometry: newgeometry });
  res.render("listings/index.ejs", { allListings });
};
