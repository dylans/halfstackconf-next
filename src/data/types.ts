export interface SponsorData {
  href: string;
  name: string;
  src: string;
}

export interface EventSponsors {
  complete: SponsorData[] | undefined;
  large: SponsorData[] | undefined;
  medium: SponsorData[] | undefined;
  small: SponsorData[] | undefined;
}

export interface EventDataBase {
  date?: string;
  sponsors?: EventSponsors;
}

export type EventGeoLocation = [number, number];

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
  socials?: EventSocial[];
  title: string;
}

export interface EventSponsorship {
  available?: boolean;
  currency?: string;
  expectations: string[];
}

export interface EventDataCurrent extends EventDataBase {
  afterparty?: string;
  catchphrase?: string;
  code: string;
  description: string[];
  faqs?: [string, string][];
  geolocation: EventGeoLocation;
  location: string;
  packet?: string;
  schedule: string;
  sessions?: EventSession[];
  sponsorship: EventSponsorship;
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
  otherEvents?: Record<string, number[]>;
  videos?: EventVideo[];
}

export interface EventDataJoined extends EventDataCurrent, EventDataDefault {
  slug: string;
}
