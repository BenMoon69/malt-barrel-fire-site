export interface Location {
  name: string;
  slug: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  tradingHours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  mapQuery: string;
  instagram: string;
  instagramHandle: string;
  heroImage: string;
  menus: {
    main: boolean;
    drinks: boolean;
    sushi: boolean;
    signature: boolean;
  };
}

export const locations: Location[] = [
  {
    name: "Midrand",
    slug: "midrand",
    tagline: "Where the flame was born",
    phone: "011 594 7947",
    email: "info@maltmidrand.co.za",
    address: "Waterfall Walk Retail Centre, Midrand, Gauteng",
    hours: "Trading hours coming soon",
    tradingHours: {
      monday: "TBC",
      tuesday: "TBC",
      wednesday: "TBC",
      thursday: "TBC",
      friday: "TBC",
      saturday: "TBC",
      sunday: "TBC",
    },
    mapQuery: "Malt+Barrel+and+Fire+Midrand",
    instagram: "https://instagram.com/malt_midrand",
    instagramHandle: "@malt_midrand",
    heroImage: "/images/locations/midrand-hero.jpg",
    menus: {
      main: true,
      drinks: true,
      sushi: true,
      signature: true,
    },
  },
  {
    name: "Silver Lakes",
    slug: "silver-lakes",
    tagline: "Smoke and sophistication on the east side",
    phone: "012 809 3330",
    email: "info@mymalt.co.za",
    address: "Silver Oaks Crossing Shopping Centre, Silver Lakes, Pretoria",
    hours: "Trading hours coming soon",
    tradingHours: {
      monday: "TBC",
      tuesday: "TBC",
      wednesday: "TBC",
      thursday: "TBC",
      friday: "TBC",
      saturday: "TBC",
      sunday: "TBC",
    },
    mapQuery: "Malt+Barrel+and+Fire+Silver+Lakes",
    instagram: "https://instagram.com/malt_silverlakes",
    instagramHandle: "@malt_silverlakes",
    heroImage: "/images/locations/silver-lakes-hero.jpg",
    menus: {
      main: true,
      drinks: true,
      sushi: false,
      signature: false,
    },
  },
  {
    name: "Queenswood",
    slug: "queenswood",
    tagline: "Fire-forged flavour in the heart of Pretoria",
    phone: "078 151 7059",
    email: "qc@mymalt.co.za",
    address: "Queens Corner Shopping Centre, Queenswood, Pretoria",
    hours: "Trading hours coming soon",
    tradingHours: {
      monday: "TBC",
      tuesday: "TBC",
      wednesday: "TBC",
      thursday: "TBC",
      friday: "TBC",
      saturday: "TBC",
      sunday: "TBC",
    },
    mapQuery: "Malt+Barrel+and+Fire+Queenswood",
    instagram: "https://instagram.com/malt_queenswood",
    instagramHandle: "@malt_queenswood",
    heroImage: "/images/locations/queenswood-hero.jpg",
    menus: {
      main: true,
      drinks: true,
      sushi: false,
      signature: false,
    },
  },
  {
    name: "Monte Casino",
    slug: "monte-casino",
    tagline: "Premium dining meets nightlife energy",
    phone: "011 465 1625",
    email: "info@maltmonte.co.za",
    address: "Montecasino Piazza, Fourways, Gauteng",
    hours: "Trading hours coming soon",
    tradingHours: {
      monday: "TBC",
      tuesday: "TBC",
      wednesday: "TBC",
      thursday: "TBC",
      friday: "TBC",
      saturday: "TBC",
      sunday: "TBC",
    },
    mapQuery: "Malt+Barrel+and+Fire+Montecasino",
    instagram: "https://instagram.com/malt_montecasino",
    instagramHandle: "@malt_montecasino",
    heroImage: "/images/locations/monte-casino-hero.jpg",
    menus: {
      main: true,
      drinks: true,
      sushi: true,
      signature: false,
    },
  },
];
