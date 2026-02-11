export interface Location {
  name: string;
  slug: string;
  tagline: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  mapQuery: string;
}

export const locations: Location[] = [
  {
    name: "Midrand",
    slug: "midrand",
    tagline: "Where the flame was born",
    phone: "+27 10 XXX XXXX",
    email: "midrand@maltbarrelandfire.com",
    address: "Midrand, Gauteng, South Africa",
    hours: "Mon–Sun: 12:00–22:00",
    mapQuery: "Malt+Barrel+and+Fire+Midrand",
  },
  {
    name: "Silver Lakes",
    slug: "silver-lakes",
    tagline: "Smoke and sophistication on the east side",
    phone: "+27 12 XXX XXXX",
    email: "silverlakes@maltbarrelandfire.com",
    address: "Silver Lakes, Pretoria, Gauteng",
    hours: "Mon–Sun: 12:00–22:00",
    mapQuery: "Malt+Barrel+and+Fire+Silver+Lakes",
  },
  {
    name: "Queenswood",
    slug: "queenswood",
    tagline: "Fire-forged flavour in the heart of Pretoria",
    phone: "+27 12 XXX XXXX",
    email: "queenswood@maltbarrelandfire.com",
    address: "Queenswood, Pretoria, Gauteng",
    hours: "Mon–Sun: 12:00–22:00",
    mapQuery: "Malt+Barrel+and+Fire+Queenswood",
  },
  {
    name: "Monte Casino",
    slug: "monte-casino",
    tagline: "Premium dining meets nightlife energy",
    phone: "+27 11 XXX XXXX",
    email: "montecasino@maltbarrelandfire.com",
    address: "Montecasino, Fourways, Gauteng",
    hours: "Mon–Sun: 12:00–23:00",
    mapQuery: "Malt+Barrel+and+Fire+Montecasino",
  },
];
