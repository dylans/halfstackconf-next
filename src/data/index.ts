import { promises as fs } from "node:fs";
import * as path from "node:path";

import {
  EventDataCurrent,
  EventDataDefault,
  EventDataHistorical,
  EventDataJoined,
} from "./types";

const dataDirectory = path.join(process.cwd(), "src/data");
const eventsDirectory = path.join(dataDirectory, "events");

export async function getEvents() {
  return await fs.readdir(eventsDirectory);
}

export async function getEventYears(event: string) {
  return (await fs.readdir(path.join(eventsDirectory, event)))
    .map((fileName) => +fileName.replace(".json", ""))
    .filter(Boolean);
}

export async function getEventData(
  event: string,
  year: number
): Promise<EventDataHistorical>;
export async function getEventData(
  event: string,
  year: "current"
): Promise<EventDataCurrent>;
export async function getEventData(
  event: string,
  year: "default"
): Promise<EventDataDefault>;
export async function getEventData(
  event: string,
  year: number | "current" | "default"
) {
  return JSON.parse(
    (
      await fs.readFile(path.join(eventsDirectory, event, `${year}.json`))
    ).toString()
  ) as unknown;
}

export async function getEventDataCurrentAndDefault(
  slug: string
): Promise<EventDataJoined> {
  const [currentData, defaultData] = await Promise.all([
    getEventData(slug, "current"),
    getEventData(slug, "default"),
  ]);

  return { ...currentData, ...defaultData, slug };
}
