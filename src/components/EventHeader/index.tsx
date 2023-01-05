import { Header } from "../Header";

export interface EventHeaderProps {
  slug: string;
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
