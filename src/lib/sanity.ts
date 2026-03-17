// src/lib/sanity.ts
import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: process.env.NODE_ENV === "production",
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

// ─── Queries ─────────────────────────────────────────────────────────────────

export const heroQuery = `*[_type == "siteSettings"][0]{
  heroTagline, heroTitle, heroSubtitle, heroCta1, heroCta2,
  heroImage { asset->{ _id, url, metadata { dimensions } } }
}`;

export const aboutQuery = `*[_type == "siteSettings"][0]{
  aboutTitle, aboutBody, aboutImage { asset->{ _id, url, metadata { dimensions } } },
  highlights[]{ number, label }
}`;

export const sermonsQuery = `*[_type == "sermon"] | order(publishedAt desc)[0...12]{
  _id, title, youtubeId, description, publishedAt,
  thumbnail { asset->{ _id, url } }, seriesTag
}`;

export const quotesQuery = `*[_type == "quote"] | order(_createdAt asc){
  _id, text
}`;

export const familyQuery = `*[_type == "familyPhoto"] | order(order asc){
  _id, caption, photo { asset->{ _id, url, metadata { dimensions } } }
}`;

export const mentorshipQuery = `*[_type == "siteSettings"][0]{
  mentorshipTitle, mentorshipBody, mentorshipCtaLabel, mentorshipCtaLink,
  mentorshipPillars[]{ icon, title, description }
}`;
