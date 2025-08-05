import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Blog")
    .items([
      S.documentTypeListItem("event").title("Events"),
      S.documentTypeListItem("category").title("Categories"),
      S.documentTypeListItem("photo").title("Photo Gallery"),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) =>
          item.getId() &&
          !["event", "category", "photo"].includes(item.getId()!)
      ),
    ]);
