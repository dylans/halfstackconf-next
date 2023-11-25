import { EventSlug } from "~/data/types";

import { Header } from "../Header";

export interface EventHeaderProps {
  dateString?: string;
  slug: EventSlug;
}

export function EventHeader({ dateString, slug }: EventHeaderProps) {
  const isFuture = dateString && new Date(dateString) > new Date();
  return isFuture ? (
    <Header
      links={[
        ["Tickets", `/${slug}/tickets`],
        ["Schedule", `/${slug}/schedule`],
        ["Sponsorship", `/${slug}/spon`],
        ["FAQs", `/${slug}/faqs`],
        ["Past Events", `/pastevents`],
      ]}
      variant="inverted"
    />
  ) : (
    <Header links={[["Past Events", `/pastevents`]]} variant="inverted" />
  );
}
