import { defineType } from "sanity";

export const photoType = defineType({
  name: "photo",
  title: "Photo",
  type: "document",
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt text",
          description: "Short description of image for screen readers",
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: "credits",
      type: "string",
      title: "Photographer / Credits",
      description: "Name of the person who took the photo",
    },
  ],
});
