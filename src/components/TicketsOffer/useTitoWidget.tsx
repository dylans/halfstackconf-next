import { useEffect, useState } from "react";

import styles from "./useTitoWidget.module.css";

interface TitoWidgetProps {
  className?: string;
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

let added = false;

export function useTitoWidget(event: string) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (added) {
      return;
    }

    const script = document.createElement("script");
    script.setAttribute("async", "async");
    script.setAttribute("src", "https://js.tito.io/v2/with/inline");
    script.addEventListener("load", () => {
      setLoaded(true);
    });
    document.head.appendChild(script);
    added = true;
  }, []);

  return (
    <div className={styles.titoWidget}>
      {loaded ? (
        <tito-widget event={event}></tito-widget>
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
}
