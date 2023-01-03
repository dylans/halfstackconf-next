import { useEffect, useState } from "react";

interface TitoWidgetProps {
  event: string;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ["tito-widget"]: TitoWidgetProps;
    }
  }
}

export function useTitoWidget(event: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.setAttribute("async", "async");
    script.setAttribute("src", "https://js.tito.io/v2");
    script.addEventListener("load", () => {
      setLoaded(true);
    });
    document.head.appendChild(script);
  }, []);

  return loaded ? (
    <tito-widget event={event}></tito-widget>
  ) : (
    <div>loading...</div>
  );
}
