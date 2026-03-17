// src/app/studio/[[...tool]]/page.tsx
/**
 * Sanity Studio embedded at /studio
 * Access at: http://localhost:3000/studio
 * Or in production: https://yourdomain.com/studio
 */
import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";

export const dynamic = "force-static";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
