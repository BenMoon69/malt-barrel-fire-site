import { locations } from "@/content/locations";
import LocationDetail from "@/components/LocationDetail";

const location = locations.find((l) => l.slug === "midrand")!;

export const metadata = {
  title: `${location.name} — Malt Barrel & Fire`,
  description: `Visit Malt Barrel & Fire ${location.name}. ${location.tagline}. ${location.address}. ${location.hours}.`,
};

export default function MidrandPage() {
  return <LocationDetail location={location} />;
}
