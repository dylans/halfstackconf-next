import { useEffect } from "react";

declare global {
  interface Window {
    now4real?: {
      config: {
        scope: string;
        target: string;
        widget: Record<string, string>;
      };
    };
  }
}

export function useNow4Real() {
  useEffect(() => {
    if (window.now4real) {
      return;
    }

    window.now4real = {
      config: {
        scope: "page",
        target: "widget",
        widget: {
          color_1: "#22366E",
          color_2: "#ffffff",
        },
      },
    };

    console.log("yay");
    const n4r = document.createElement("script");
    n4r.async = true;
    n4r.src = "https://cdn.now4real.com/now4real.js";
    n4r.type = "text/javascript";
    document.body.appendChild(n4r);
  }, []);
}
