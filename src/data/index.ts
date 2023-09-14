import { promises as fs } from "node:fs";
import * as path from "node:path";

import { eventOrder } from "./events";
import {
  EventDataCurrent,
  EventDataDefault,
  EventDataHistorical,
  EventDataJoined,
  EventName,
} from "./types";

const dataDirectory = path.join(process.cwd(), "src/data");
const eventsDirectory = path.join(dataDirectory, "events");

export function getEvents() {
  return eventOrder;
}

export async function getEventYears(event: EventName) {
  return (await fs.readdir(path.join(eventsDirectory, event)))
    .map((fileName) => +fileName.replace(".json", ""))
    .filter(Boolean);
}

export async function getEventData(
  event: EventName,
  year: number
): Promise<EventDataHistorical>;
export async function getEventData(
  event: EventName,
  year: "current"
): Promise<EventDataCurrent>;
export async function getEventData(
  event: EventName,
  year: "default"
): Promise<EventDataDefault>;
export async function getEventData(
  event: EventName,
  year: number | "current" | "default"
) {
  return JSON.parse(
    (
      await fs.readFile(path.join(eventsDirectory, event, `${year}.json`))
    ).toString()
  ) as unknown;
}

export async function getEventDataCurrentAndDefault(
  slug: EventName
): Promise<EventDataJoined> {
  const [currentData, defaultData] = await Promise.all([
    getEventData(slug, "current"),
    getEventData(slug, "default"),
  ]);

  return {
    ...defaultData,
    ...currentData,
    sponsorship: {
      ...defaultData.sponsorship,
      ...currentData.sponsorship,
    },
    slug,
  };
}
