import "server-only";

const dictionaries = {
  en: () =>
    import("@/lib/dictionaries/en.json").then((module) => module.default),
  no: () =>
    import("@/lib/dictionaries/no.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "no") =>
  dictionaries[locale]();
