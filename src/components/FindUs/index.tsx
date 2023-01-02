import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useMemo } from "react";

import { EventMap } from "../../data/types";
import { Text } from "../Text";
import { createMapOptions } from "./createMapOptions";
import styles from "./index.module.css";

export interface FindUsProps {
  map: EventMap;
  slug: string;
}

const containerStyle = {
  width: "100%",
  height: "400px",
};

export function FindUs({ map: { geolocation, pin }, slug }: FindUsProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAF3YU1nrEkOHd_kmrvTmOtlyTQMjPmRlk",
  });

  const center = useMemo(
    () => ({ lat: geolocation[0], lng: geolocation[1] }),
    [geolocation]
  );

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      map.setOptions(createMapOptions());

      new google.maps.Marker({
        position: { lat: pin[0], lng: pin[1] },
        map: map,
        icon: `/events/${slug}/map-pin.png`,
      });
    },
    [slug, pin]
  );

  return (
    <>
      <Text as="h2" className={styles.h2} fontSize="extra-large" id="find-us">
        Find Us
      </Text>
      {isLoaded && (
        <GoogleMap
          center={center}
          mapContainerStyle={containerStyle}
          onLoad={onLoad}
        />
      )}
    </>
  );
}
