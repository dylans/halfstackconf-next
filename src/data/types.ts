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
  description: string[];
  socials: EventSocial[];
  title: string;
}

export interface EventDataCurrent extends EventDataBase {
  description: string[];
  location: string;
  sessions: EventSession[];
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
