import { notFound } from "next/navigation";
import { locations } from "@/content/locations";
import { getEventsForLocation } from "@/content/events";
import LocationEventsPage from "@/components/LocationEventsPage";

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const location = locations.find((l) => l.slug === slug);
    if (!location) return { title: "Events Not Found" };
    return {
      title: `Events — ${location.name} — Malt Barrel & Fire`,
      description: `Upcoming events at Malt Barrel & Fire ${location.name}. Live music, tastings, specials, and more.`,
    };
  });
}

export default async function EventsSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);
  if (!location) notFound();

  const locationEvents = getEventsForLocation(slug);

  return (
    <LocationEventsPage
      location={location}
      events={locationEvents?.events || []}
    />
  );
}
