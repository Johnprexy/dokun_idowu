// sanity/schemas/quote.ts
import { defineField, defineType } from "sanity";

export const quoteSchema = defineType({
  name: "quote",
  title: "Quote",
  type: "document",
  fields: [
    defineField({ name: "text",  type: "text",   title: "Quote Text", validation: (r) => r.required() }),
    defineField({ name: "order", type: "number", title: "Display Order" }),
  ],
  preview: { select: { title: "text" } },
});

// sanity/schemas/familyPhoto.ts
export const familyPhotoSchema = defineType({
  name: "familyPhoto",
  title: "Family Photo",
  type: "document",
  fields: [
    defineField({ name: "caption", type: "string", title: "Caption" }),
    defineField({ name: "photo",   type: "image",  title: "Photo", options: { hotspot: true } }),
    defineField({ name: "order",   type: "number", title: "Display Order" }),
  ],
  preview: { select: { title: "caption", media: "photo" } },
});
