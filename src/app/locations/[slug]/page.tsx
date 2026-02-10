import { notFound } from "next/navigation";
import { locations } from "@/content/locations";
import LocationDetail from "@/components/LocationDetail";

export function generateStaticParams() {
  return locations.map((loc) => ({ slug: loc.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  // Use a sync approach since generateStaticParams provides all slugs
  return params.then(({ slug }) => {
    const location = locations.find((l) => l.slug === slug);
    if (!location) return { title: "Location Not Found" };
    return {
      title: `${location.name} — Malt Barrel & Fire`,
      description: `Visit Malt Barrel & Fire ${location.name}. ${location.address}. ${location.hours}.`,
    };
  });
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const location = locations.find((l) => l.slug === slug);

  if (!location) notFound();

  return <LocationDetail location={location} />;
}
