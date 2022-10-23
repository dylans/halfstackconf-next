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

export interface EventVideo {
  by: string;
  href: string;
  label?: string;
  thumbnail: string;
  title: string;
}

export interface EventDataHistorical {
  date: string;
  otherEvents: Record<string, number[]>;
  sponsors: EventSponsors;
  videos: EventVideo[];
}

export interface EventDataJoined
  extends EventDataHistorical,
    EventDataCurrent,
    EventDataDefault {}
