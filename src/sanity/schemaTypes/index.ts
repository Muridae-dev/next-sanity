import { type SchemaTypeDefinition } from "sanity";

import { blockContentType } from "./blockContentType";
import { categoryType } from "./categoryType";
import { eventType } from "./eventType";
import { photoType } from "./photoType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blockContentType, categoryType, eventType, photoType],
};
