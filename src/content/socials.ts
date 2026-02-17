/**
 * Central social media config for Malt Barrel & Fire (brand-level).
 * Update handles/URLs here — they propagate to Footer, Contact, etc.
 */
export interface SocialLink {
  name: string;
  href: string;
}

export const socials: SocialLink[] = [
  { name: "Instagram", href: "https://www.instagram.com/maltbarrelandfire" },
  { name: "Facebook", href: "https://www.facebook.com/maltbarrelandfire" },
  { name: "TikTok", href: "https://www.tiktok.com/@maltbarrelandfire" },
  { name: "X", href: "https://x.com/maltbarrelnfire" },
  { name: "YouTube", href: "https://www.youtube.com/@maltbarrelandfire" },
];
