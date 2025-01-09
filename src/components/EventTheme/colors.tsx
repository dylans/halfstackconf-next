import { EventSlug } from "~/data/types";

export interface EventColors {
  "color-backdrop-subtle": string;
  "color-faint": string;
  "color-primary": string;
  "color-primary-dark": string;
  "color-primary-light": string;
}

export const colors: Record<EventSlug, EventColors> = {
  // charlotte: {
  //   "color-backdrop-subtle": "#72be8d",
  //   "color-faint": "#abd9ba",
  //   "color-primary": "#1e7640",
  //   "color-primary-dark": "#154427",
  //   "color-primary-light": "#afe9c4",
  // },
  london: {
    "color-backdrop-subtle": "#2a45a3",
    "color-faint": "#ebf0f7",
    "color-primary": "#22366e",
    "color-primary-dark": "#19223a",
    "color-primary-light": "#7083c6",
  },
  // "london-on-the-thames": {
  //   "color-backdrop-subtle": "#2a45a3",
  //   "color-faint": "#ebf0f7",
  //   "color-primary": "#22366e",
  //   "color-primary-dark": "#19223a",
  //   "color-primary-light": "#7083c6",
  // },
  // newquay: {
  //   "color-backdrop-subtle": "#262262",
  //   "color-faint": "#e4e4ec",
  //   "color-primary": "#262261",
  //   "color-primary-dark": "#252347",
  //   "color-primary-light": "#5a5880",
  // },
  // newyork: {
  //   "color-backdrop-subtle": "#2f2d2e",
  //   "color-faint": "#cbcbcb",
  //   "color-primary": "#2f2d2e",
  //   "color-primary-dark": "#151414",
  //   "color-primary-light": "#5b5457",
  // },
  phoenix: {
    "color-backdrop-subtle": "#524ca6",
    "color-faint": "#e4e4ec",
    "color-primary": "#262262",
    "color-primary-dark": "#252347",
    "color-primary-light": "#736ccd",
  },
  // telaviv: {
  //   "color-backdrop-subtle": "#5073df",
  //   "color-faint": "#9cb0d9",
  //   "color-primary": "#324d9c",
  //   "color-primary-dark": "#28396a",
  //   "color-primary-light": "#809bed",
  // },
  vienna: {
    "color-backdrop-subtle": "#e78689",
    "color-faint": "#fadddf",
    "color-primary": "#b41c21",
    "color-primary-dark": "#8b0f13",
    "color-primary-light": "#f3a7a9",
  },
  // belgrade: {
  //   "color-backdrop-subtle": "#e1ff99",
  //   "color-faint": "#e1ff99",
  //   "color-primary": "#7aa11c",
  //   "color-primary-dark": "#304007",
  //   "color-primary-light": "#e1ff99",
  // },
};
