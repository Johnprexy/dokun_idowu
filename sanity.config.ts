import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import siteSettings from "./sanity/schemas/siteSettings";
import sermon from "./sanity/schemas/sermon";
import { quoteSchema, familyPhotoSchema } from "./sanity/schemas/index";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "wz3mus1l";
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET   || "production";

export default defineConfig({
  name:     "dokun-idowu",
  title:    "Rev. Dokun Idowu — CMS",
  projectId,
  dataset,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem().title("Site Settings").child(
              S.document().schemaType("siteSettings").documentId("siteSettings")
            ),
            S.divider(),
            S.documentTypeListItem("sermon").title("Sermons & Teachings"),
            S.documentTypeListItem("quote").title("Quotes"),
            S.documentTypeListItem("familyPhoto").title("Family Photos"),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: [siteSettings, sermon, quoteSchema, familyPhotoSchema] },
});
