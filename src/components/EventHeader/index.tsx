import { EventName } from "~/data/types";

import { Header } from "../Header";

export interface EventHeaderProps {
  slug: EventName;
}

export function EventHeader({ slug }: EventHeaderProps) {
  return (
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
  );
}
