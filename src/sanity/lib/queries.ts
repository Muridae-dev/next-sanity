import { defineQuery } from "next-sanity";

export const EVENTS_QUERY =
  defineQuery(`*[_type == "event" && defined(slug.current)]|order(eventDate desc)[0...12]{
  _id,
  title,
  slug,
  mainImage,
  eventDate,
  shortDescription,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  )
}`);

export const EVENTS_SLUGS_QUERY =
  defineQuery(`*[_type == "event" && defined(slug.current)]{ 
  "slug": slug.current
}`);

export const EVENT_QUERY =
  defineQuery(`*[_type == "event" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  mainImage,
  eventDate,
  body,
  "categories": coalesce(
    categories[]->{
      _id,
      slug,
      title
    },
    []
  )
}`);
