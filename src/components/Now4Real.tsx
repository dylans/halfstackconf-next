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

const containerId = "now4real-container";

export function Now4Real() {
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
          container: containerId,
        },
      },
    };

    const n4r = document.createElement("script");
    n4r.async = true;
    n4r.src = "https://cdn.now4real.com/now4real.js";
    n4r.type = "text/javascript";
    document.body.appendChild(n4r);
  }, []);

  return (
    <div
      id={containerId}
      ref={(div) => {
        if (!div) {
          return;
        }

        const observer = new MutationObserver(() => {
          const iframe = div.querySelector("iframe");
          if (!iframe) {
            return;
          }

          // By default, Now4Real doesn't add a title to its iframes.
          // https://dequeuniversity.com/rules/axe/4.6/frame-title
          iframe.title = "Now4Real Embed";
          observer.disconnect();
        });

        observer.observe(div, { childList: true });
      }}
    />
  );
}
