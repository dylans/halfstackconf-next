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

export interface EventDataBase {
  date: string;
  sponsors: EventSponsors;
}

export interface EventDataCurrent extends EventDataBase {
  description: string[];
  location: string;
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

export interface EventDataHistorical extends EventDataBase {
  otherEvents: Record<string, number[]>;
  videos: EventVideo[];
}

export interface EventDataJoined
  extends EventDataHistorical,
    EventDataCurrent,
    EventDataDefault {}
