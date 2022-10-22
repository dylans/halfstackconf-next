// Todo: use Zod to enforce all these!

export interface SponsorData {
  href: string;
  name: string;
  src: string;
}

export interface EventSponsors {
  complete: SponsorData[];
  large: SponsorData[];
  medium: SponsorData[];
  small: SponsorData[];
}

export interface EventDataCurrent {
  sponsors: EventSponsors;
  year: number;
}

export interface EventDataDefault {
  name: string;
}

export interface EventDataHistorical {
  date: string;
  otherEvents: Record<string, number[]>;
  sponsors: EventSponsors;
}

export interface EventDataJoined
  extends EventDataHistorical,
    EventDataCurrent,
    EventDataDefault {}
