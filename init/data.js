const sampleListings = [
  {
    title: "Luxury Beachfront Villa",
    description:
      "A stunning villa right on the beach with breathtaking ocean views.",
    image: {
      filename: "wonderlust_DEV/ivevajy08at7oztv7uyo",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123623/wonderlust_DEV/ivevajy08at7oztv7uyo.jpg",
    },
    price: 2500,
    location: "Maui, Hawaii",
    country: "United States",
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "A charming cabin nestled in the woods with a fireplace and hot tub.",
    image: {
      filename: "wonderlust_DEV/nyajj3wkwogzavtzcudn",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698058357/wonderlust_DEV/nyajj3wkwogzavtzcudn.jpg",
    },
    price: 800,
    location: "Aspen, Colorado",
    country: "United States",
  },
  {
    title: "City Center Apartment",
    description:
      "A modern apartment in the heart of the city with great cityscape views.",
    image: {
      filename: "wonderlust_DEV/px69ynpokul5kt1y66b8",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698059036/wonderlust_DEV/px69ynpokul5kt1y66b8.jpg",
    },
    price: 1200,
    location: "New York City, New York",
    country: "United States",
  },
  {
    title: "Secluded Mountain Lodge",
    description:
      "A peaceful lodge in the mountains surrounded by nature and wildlife.",
    image: {
      filename: "wonderlust_DEV/hbmx6we0vyrnufyvq3jg",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123634/wonderlust_DEV/hbmx6we0vyrnufyvq3jg.jpg",
    },
    price: 1500,
    location: "Banff, Canada",
    country: "Canada",
  },
  {
    title: "Beachfront Bungalow",
    description: "A cozy bungalow steps away from a pristine sandy beach.",
    image: {
      filename: "wonderlust_DEV/nooy0cghezvyhucrh0zf",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123689/wonderlust_DEV/nooy0cghezvyhucrh0zf.jpg",
    },
    price: 1800,
    location: "Bali, Indonesia",
    country: "Indonesia",
  },
  {
    title: "Rustic Mountain Chalet",
    description:
      "A charming chalet with a rustic interior, surrounded by pine trees.",
    image: {
      filename: "wonderlust_DEV/b1ljrederqnsmrrixgha",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123700/wonderlust_DEV/b1ljrederqnsmrrixgha.jpg",
    },
    price: 900,
    location: "Chamonix, France",
    country: "France",
  },
  {
    title: "Seaside Cottage",
    description:
      "A cozy cottage by the sea with a private dock for fishing and boating.",
    image: {
      filename: "wonderlust_DEV/gfajf9uk90cdthdprt2u",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123750/wonderlust_DEV/gfajf9uk90cdthdprt2u.jpg",
    },
    price: 1100,
    location: "Cape Cod, Massachusetts",
    country: "United States",
  },
  {
    title: "Historic Townhouse",
    description:
      "An elegant townhouse in a historic district, close to museums and theaters.",
    image: {
      filename: "wonderlust_DEV/nqvbb4q767opauprkbar",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123755/wonderlust_DEV/nqvbb4q767opauprkbar.jpg",
    },
    price: 1600,
    location: "London, United Kingdom",
    country: "United Kingdom",
  },
  {
    title: "Ski-in/Ski-out Condo",
    description:
      "A modern condo right on the ski slopes, perfect for winter enthusiasts.",
    image: {
      filename: "wonderlust_DEV/vwm8qcwwgzxvwcjdpjsb",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123759/wonderlust_DEV/vwm8qcwwgzxvwcjdpjsb.jpg",
    },
    price: 1400,
    location: "Whistler, Canada",
    country: "Canada",
  },
  {
    title: "Tropical Paradise Villa",
    description:
      "A luxurious villa with a private pool and lush tropical gardens.",
    image: {
      filename: "wonderlust_DEV/zbkstvplbmqz9kafm1ig",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123779/wonderlust_DEV/zbkstvplbmqz9kafm1ig.jpg",
    },
    price: 2800,
    location: "Phuket, Thailand",
    country: "Thailand",
  },
  {
    title: "Modern City Apartment",
    description:
      "A stylish apartment in the heart of the city with stunning skyline views.",
    image: {
      filename: "wonderlust_DEV/multcu0oojzq753rwbmq",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123869/wonderlust_DEV/multcu0oojzq753rwbmq.jpg",
    },
    price: 1350,
    location: "Los Angeles, California",
    country: "United States",
  },
  {
    title: "Countryside Retreat",
    description:
      "A tranquil cottage surrounded by rolling hills and a scenic countryside.",
    image: {
      filename: "wonderlust_DEV/hmbqrwqfkipfjxpebyf2",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123904/wonderlust_DEV/hmbqrwqfkipfjxpebyf2.jpg",
    },
    price: 950,
    location: "Cotswolds, England",
    country: "United Kingdom",
  },
  {
    title: "Beachfront Paradise",
    description:
      "An idyllic beachfront property with a private beach and infinity pool.",
    image: {
      filename: "wonderlust_DEV/erlx4vgxage0o9yea5ow",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123919/wonderlust_DEV/erlx4vgxage0o9yea5ow.jpg",
    },
    price: 3200,
    location: "Maldives",
    country: "Maldives",
  },
  {
    title: "Mountain View Chalet",
    description:
      "A cozy chalet with breathtaking mountain views and a fireplace.",
    image: {
      filename: "wonderlust_DEV/hhyogtn3gwtxha3yba5i",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123940/wonderlust_DEV/hhyogtn3gwtxha3yba5i.jpg",
    },
    price: 1100,
    location: "Banff, Canada",
    country: "Canada",
  },
  {
    title: "Historic Villa",
    description:
      "An opulent villa with rich history, antique furnishings, and vast gardens.",
    image: {
      filename: "wonderlust_DEV/c6tdbqhcjofgicmmglgp",
      url: "https://res.cloudinary.com/dyf6p4r3o/image/upload/v1698123943/wonderlust_DEV/c6tdbqhcjofgicmmglgp.jpg",
    },
    price: 2800,
    location: "Tuscany, Italy",
    country: "Italy",
  },
];
module.exports = { data: sampleListings };
