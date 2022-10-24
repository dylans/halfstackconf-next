import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useMemo, useState } from "react";

import { EventGeolocation } from "../../data/types";
import { Text } from "../Text";
import { createMapOptions } from "./createMapOptions";
import styles from "./index.module.css";

const containerStyle = {
  width: "100%",
  height: "400px",
};

export interface FindUsProps {
  geolocation: EventGeolocation;
}

export function FindUs({ geolocation }: FindUsProps) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAF3YU1nrEkOHd_kmrvTmOtlyTQMjPmRlk",
  });

  const center = useMemo(
    () => ({ lat: geolocation[0], lng: geolocation[1] }),
    [geolocation]
  );
  console.log({ center, geolocation });

  const [, setMap] = useState<google.maps.Map>();

  const onLoad = useCallback((map: google.maps.Map) => {
    map.setOptions(createMapOptions("blue"));
    setMap(map);

    new google.maps.Marker({
      position: { lat: 51.52036, lng: -0.07319200000006276 },
      map: map,
      icon: "/icons/pin-london.png",
    });
  }, []);

  const onUnmount = useCallback(() => {
    setMap(undefined);
  }, []);

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
          onUnmount={onUnmount}
        />
      )}
    </>
  );
}
