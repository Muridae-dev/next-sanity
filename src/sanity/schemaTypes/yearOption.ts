import { defineType } from "sanity";

export const yearOption = defineType({
  name: "yearOption",
  title: "Year Option",
  type: "document",
  fields: [
    {
      name: "year",
      title: "Year",
      type: "number",
      validation: (Rule) => Rule.required().min(1000).max(9999),
    },
  ],
  preview: {
    select: {
      title: "year",
    },
  },
});
