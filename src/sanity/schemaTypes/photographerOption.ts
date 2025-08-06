import { defineType } from "sanity";

export const photographerOption = defineType({
  name: "photographerOption",
  title: "Photographers",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Name of the person who took the photo",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
});
