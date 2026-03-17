// sanity/schemas/siteSettings.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    // Hero
    defineField({ name: "heroTagline",  type: "string", title: "Hero Tagline",  group: "hero" }),
    defineField({ name: "heroTitle",    type: "string", title: "Hero Title",    group: "hero" }),
    defineField({ name: "heroSubtitle", type: "text",   title: "Hero Subtitle", group: "hero" }),
    defineField({ name: "heroCta1",     type: "string", title: "CTA Button 1",  group: "hero" }),
    defineField({ name: "heroCta2",     type: "string", title: "CTA Button 2",  group: "hero" }),
    defineField({ name: "heroImage",    type: "image",  title: "Hero Image",    group: "hero", options: { hotspot: true } }),

    // About
    defineField({ name: "aboutTitle", type: "string", title: "About Title", group: "about" }),
    defineField({ name: "aboutBody",  type: "array",  title: "About Body",  group: "about", of: [{ type: "block" }] }),
    defineField({ name: "aboutImage", type: "image",  title: "About Image", group: "about", options: { hotspot: true } }),
    defineField({
      name: "highlights", type: "array", title: "Stat Highlights", group: "about",
      of: [{ type: "object", fields: [
        { name: "number", type: "string", title: "Number / Value" },
        { name: "label",  type: "string", title: "Label" },
      ]}],
    }),

    // Mentorship
    defineField({ name: "mentorshipTitle",    type: "string", title: "Mentorship Title",    group: "mentorship" }),
    defineField({ name: "mentorshipBody",     type: "text",   title: "Mentorship Body",     group: "mentorship" }),
    defineField({ name: "mentorshipCtaLabel", type: "string", title: "CTA Label",           group: "mentorship" }),
    defineField({ name: "mentorshipCtaLink",  type: "url",    title: "CTA Link",            group: "mentorship" }),
    defineField({
      name: "mentorshipPillars", type: "array", title: "Mentorship Pillars", group: "mentorship",
      of: [{ type: "object", fields: [
        { name: "icon",        type: "string", title: "Icon (emoji or symbol)" },
        { name: "title",       type: "string", title: "Pillar Title" },
        { name: "description", type: "text",   title: "Description" },
      ]}],
    }),
  ],
  groups: [
    { name: "hero",        title: "Hero Section" },
    { name: "about",       title: "About Section" },
    { name: "mentorship",  title: "Mentorship Section" },
  ],
});
