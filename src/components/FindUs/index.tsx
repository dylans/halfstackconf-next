import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useMemo } from "react";

import { useEventColors } from "~/components/EventTheme";
import { EventGeoLocation, EventSlug } from "~/data/types";

import { Text } from "../Text";
import { createMapOptions } from "./createMapOptions";
import styles from "./index.module.css";

export interface FindUsProps {
  geolocation: EventGeoLocation;
  slug: EventSlug;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

export function FindUs({ geolocation, slug }: FindUsProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAF3YU1nrEkOHd_kmrvTmOtlyTQMjPmRlk",
  });

  const center = useMemo(
    () => ({ lat: geolocation[0], lng: geolocation[1] }),
    [geolocation]
  );

  const colors = useEventColors(slug);
  const waterColor = colors["color-primary-light"];

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      map.setOptions(createMapOptions({ waterColor }));

      new google.maps.Marker({
        position: { lat: geolocation[0], lng: geolocation[1] },
        map: map,
        icon: `/events/${slug}/map-pin.png`,
      });
    },
    [geolocation, slug, waterColor]
  );

  return (
    <div className={styles.findUs}>
      <Text as="h2" className={styles.h2} fontSize="extra-large" id="find-us">
        Find Us
      </Text>
      {isLoaded && (
        <GoogleMap
          center={center}
          mapContainerStyle={{
            ...containerStyle,
            floodColor: "red",
            fill: "red",
            accentColor: "red",
            borderColor: "red",
            color: "red",
            caretColor: "red",
            lightingColor: "red",
            outlineColor: "red",
            scrollbarColor: "red",
          }}
          onLoad={onLoad}
        />
      )}
    </div>
  );
}
