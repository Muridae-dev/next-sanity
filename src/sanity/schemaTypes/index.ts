import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { eventType } from "./eventType";
import { photoType } from "./photoType";
import { yearOption } from "./yearOption";
import { photographerOption } from "./photographerOption";
import { localeString } from "./localeStringType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    localeString,
    blockContentType,
    categoryType,
    eventType,
    photoType,
    yearOption,
    photographerOption,
  ],
};
