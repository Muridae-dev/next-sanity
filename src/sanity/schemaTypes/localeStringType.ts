import { defineType } from "sanity";

export const supportedLanguages = [
  { id: "en", title: "English", isDefault: true },
  { id: "no", title: "Norweigan" },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export const localeString = defineType({
  title: "Localized string",
  name: "localeString",
  type: "object",
  fieldsets: [
    {
      title: "Translations",
      name: "translations",
      options: { collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "string",
    fieldset: lang.isDefault ? undefined : "translations",
  })),
});
