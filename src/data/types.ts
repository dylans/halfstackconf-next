// Todo: use Zod to enforce all these!

export interface EventData {
  date: string;
}

export interface EventDataCurrent {
  year: number;
}

export interface EventDataDefault {
  name: string;
}

export interface EventDataJoined
  extends EventData,
    EventDataCurrent,
    EventDataDefault {}
