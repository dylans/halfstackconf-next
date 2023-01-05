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
  date?: string;
  sponsors?: EventSponsors;
}

export type EventSocialIcon =
  | "blog"
  | "facebook"
  | "github"
  | "glitch"
  | "linkedin"
  | "medium"
  | "twitter"
  | "youtube";

export interface EventSocial {
  href: string;
  icon: EventSocialIcon;
}

export interface EventSession {
  by: string;
  description?: string[];
  socials: EventSocial[];
  title: string;
}

export type EventGeoLocation = [number, number];

export interface EventDataCurrent extends EventDataBase {
  afterparty?: string;
  catchphrase?: string;
  description: string[];
  geolocation: EventGeoLocation;
  location: string;
  sessions: EventSession[];
  trailer?: string;
  year: number;
}

export interface EventDataDefault {
  catchphrase?: string;
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

export interface EventDataJoined extends EventDataCurrent, EventDataDefault {
  slug: string;
}

export interface EventDataComplete
  extends EventDataHistorical,
    EventDataJoined {}
