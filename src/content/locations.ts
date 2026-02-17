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
    phone: "+27 10 XXX XXXX",
    email: "midrand@maltbarrelandfire.com",
    address: "Midrand, Gauteng, South Africa",
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
    instagram: "https://instagram.com/maltbarrelandfire_midrand",
    instagramHandle: "@maltbarrelandfire_midrand",
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
    phone: "+27 12 XXX XXXX",
    email: "silverlakes@maltbarrelandfire.com",
    address: "Silver Lakes, Pretoria, Gauteng",
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
    instagram: "https://instagram.com/maltbarrelandfire_silverlakes",
    instagramHandle: "@maltbarrelandfire_silverlakes",
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
    phone: "+27 12 XXX XXXX",
    email: "queenswood@maltbarrelandfire.com",
    address: "Queenswood, Pretoria, Gauteng",
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
    instagram: "https://instagram.com/maltbarrelandfire_queenswood",
    instagramHandle: "@maltbarrelandfire_queenswood",
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
    phone: "+27 11 XXX XXXX",
    email: "montecasino@maltbarrelandfire.com",
    address: "Montecasino, Fourways, Gauteng",
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
    instagram: "https://instagram.com/maltbarrelandfire_montecasino",
    instagramHandle: "@maltbarrelandfire_montecasino",
    heroImage: "/images/locations/monte-casino-hero.jpg",
    menus: {
      main: true,
      drinks: true,
      sushi: true,
      signature: false,
    },
  },
];
