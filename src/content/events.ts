export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  recurring: boolean;
}

export interface LocationEvents {
  slug: string;
  locationName: string;
  events: Event[];
}

export const locationEvents: LocationEvents[] = [
  {
    slug: "midrand",
    locationName: "Midrand",
    events: [
      {
        id: "mid-1",
        title: "Women's Wednesday",
        date: "Every Wednesday",
        time: "From 5PM",
        description:
          "Live DJs, signature cocktails, and an electric atmosphere. The midweek experience you deserve.",
        image: "/images/hero-interior.jpg",
        recurring: true,
      },
      {
        id: "mid-2",
        title: "Corona Sunset Session",
        date: "Every Friday",
        time: "4PM – 7PM",
        description:
          "Live DJ sets, R30 Coronas, and golden hour vibes. The perfect start to your weekend.",
        image: "/images/drinks/spirits-bar.jpg",
        recurring: true,
      },
      {
        id: "mid-3",
        title: "Live Music Saturdays",
        date: "Every Saturday",
        time: "7PM – Late",
        description:
          "Local artists, craft cocktails, and fire-grilled plates. A Saturday night like no other.",
        image: "/images/bar-interior.jpg",
        recurring: true,
      },
    ],
  },
  {
    slug: "monte-casino",
    locationName: "Monte Casino",
    events: [
      {
        id: "mc-1",
        title: "Whiskey Tasting Evening",
        date: "Last Saturday of each month",
        time: "6PM – 9PM",
        description:
          "Guided tasting of rare and premium whiskeys from around the world. Limited seats available.",
        image: "/images/drinks/spirits-bar.jpg",
        recurring: true,
      },
      {
        id: "mc-2",
        title: "Corona Sunset Session",
        date: "Every Friday",
        time: "4PM – 7PM",
        description:
          "Live DJ sets, R30 Coronas, and golden hour vibes. The perfect start to your weekend.",
        image: "/images/hero-interior.jpg",
        recurring: true,
      },
      {
        id: "mc-3",
        title: "Live Sports Screenings",
        date: "Match days",
        time: "Varies",
        description:
          "Catch every big game on our screens with cold beers and fire-grilled sharing platters.",
        image: "/images/bar-interior.jpg",
        recurring: true,
      },
    ],
  },
  {
    slug: "silver-lakes",
    locationName: "Silver Lakes",
    events: [
      {
        id: "sl-1",
        title: "Sunday Roast Sessions",
        date: "Every Sunday",
        time: "12PM – 4PM",
        description:
          "Slow-roasted meats, live acoustic sets, and family-friendly vibes. The perfect Sunday.",
        image: "/images/bar-interior.jpg",
        recurring: true,
      },
      {
        id: "sl-2",
        title: "Date Night Specials",
        date: "Every Thursday",
        time: "6PM – 10PM",
        description:
          "Two-course meal for two with a bottle of wine. An evening of fire-kissed flavour.",
        image: "/images/hero-interior.jpg",
        recurring: true,
      },
    ],
  },
  {
    slug: "queenswood",
    locationName: "Queenswood",
    events: [
      {
        id: "qw-1",
        title: "Women's Wednesday",
        date: "Every Wednesday",
        time: "From 5PM",
        description:
          "Cocktail specials, good music, and great company. Your midweek escape awaits.",
        image: "/images/hero-interior.jpg",
        recurring: true,
      },
      {
        id: "qw-2",
        title: "Live Sports Screenings",
        date: "Match days",
        time: "Varies",
        description:
          "All the big fixtures on the big screen with cold beers and sharing boards.",
        image: "/images/bar-interior.jpg",
        recurring: true,
      },
    ],
  },
];

export function getEventsForLocation(slug: string): LocationEvents | undefined {
  return locationEvents.find((le) => le.slug === slug);
}
