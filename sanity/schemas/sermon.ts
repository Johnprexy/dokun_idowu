// sanity/schemas/sermon.ts
import { defineField, defineType } from "sanity";

export default defineType({
  name: "sermon",
  title: "Sermon / Teaching",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", title: "Title", validation: (r) => r.required() }),
    defineField({ name: "youtubeId", type: "string", title: "YouTube Video ID", description: "e.g. dQw4w9WgXcQ from youtube.com/watch?v=dQw4w9WgXcQ" }),
    defineField({ name: "seriesTag", type: "string", title: "Series / Tag", description: "e.g. 'RBTC Taster', 'Rhema Nigeria'" }),
    defineField({ name: "description", type: "text", title: "Short Description", rows: 3 }),
    defineField({ name: "thumbnail", type: "image", title: "Custom Thumbnail", description: "Leave blank to auto-use YouTube thumbnail", options: { hotspot: true } }),
    defineField({ name: "publishedAt", type: "datetime", title: "Published Date" }),
  ],
  preview: {
    select: { title: "title", subtitle: "seriesTag", media: "thumbnail" },
  },
});
