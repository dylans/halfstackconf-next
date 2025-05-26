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
  const [error, setError] = useState(false);

  useEffect(() => {
    if (added) {
      setLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.setAttribute("async", "async");
    script.setAttribute("src", "https://js.tito.io/v2/with/inline");

    const loadTimeout = setTimeout(() => {
      setError(true);
    }, 10000); // 10 second timeout

    script.addEventListener("load", () => {
      clearTimeout(loadTimeout);
      setLoaded(true);
    });

    script.addEventListener("error", () => {
      clearTimeout(loadTimeout);
      setError(true);
    });

    document.head.appendChild(script);
    added = true;

    return () => {
      clearTimeout(loadTimeout);
    };
  }, []);

  if (error) {
    return (
      <div className={styles.titoWidget}>
        <div style={{ padding: "2rem", textAlign: "center" }}>
          <p>Unable to load ticket widget.</p>
          <p>
            <a
              href={`https://ti.to/${event}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "var(--color-primary)",
                textDecoration: "underline",
              }}
            >
              Buy tickets directly on Tito →
            </a>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.titoWidget}>
      {loaded ? (
        <tito-widget event={event}></tito-widget>
      ) : (
        <div style={{ padding: "2rem", textAlign: "center" }}>
          Loading tickets...
        </div>
      )}
    </div>
  );
}
