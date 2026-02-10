export interface Location {
  name: string;
  slug: string;
  phone: string;
  address: string;
  hours: string;
  mapQuery: string;
}

export const locations: Location[] = [
  {
    name: "Midrand",
    slug: "midrand",
    phone: "+27 10 XXX XXXX",
    address: "Midrand, Gauteng, South Africa",
    hours: "Mon–Sun: 12:00–22:00",
    mapQuery: "Malt+Barrel+and+Fire+Midrand",
  },
  {
    name: "Silver Lakes",
    slug: "silver-lakes",
    phone: "+27 12 XXX XXXX",
    address: "Silver Lakes, Pretoria, Gauteng",
    hours: "Mon–Sun: 12:00–22:00",
    mapQuery: "Malt+Barrel+and+Fire+Silver+Lakes",
  },
  {
    name: "Queenswood",
    slug: "queenswood",
    phone: "+27 12 XXX XXXX",
    address: "Queenswood, Pretoria, Gauteng",
    hours: "Mon–Sun: 12:00–22:00",
    mapQuery: "Malt+Barrel+and+Fire+Queenswood",
  },
  {
    name: "Monte Casino",
    slug: "monte-casino",
    phone: "+27 11 XXX XXXX",
    address: "Montecasino, Fourways, Gauteng",
    hours: "Mon–Sun: 12:00–23:00",
    mapQuery: "Malt+Barrel+and+Fire+Montecasino",
  },
];
