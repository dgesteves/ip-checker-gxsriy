import Header from "../../layouts/Header";
import LeafletMap from "../../lib/LeafletMap";
import useOwnIP from "../../hooks/useOwnIP";
import useIPData from "../../hooks/useIPData";
import { useCallback, useEffect, useState } from "react";
import { StyledMapFallback, StyledMapFallbackText } from "./styles";
import {
  MAP_FALLBACK_LAT,
  MAP_FALLBACK_LNG,
  MAP_FALLBACK_TEXT,
} from "../../constants/app";

export default function IPAddressTrackerPage() {
  const [currentIP, setCurrentIP] = useState<string>("");
  const { ownIP, ownIPIsLoading } = useOwnIP();
  const { IPData, IPIsLoading } = useIPData(currentIP);

  useEffect(() => {
    if (ownIP) {
      setCurrentIP(ownIP);
    }
  }, [ownIP]);

  const onSearch = useCallback(
    (IP: string) => {
      setCurrentIP(IP);
    },
    [setCurrentIP]
  );

  return (
    <>
      <Header IPData={IPData} onSearch={onSearch} />
      {IPData?.location && (
        <LeafletMap lat={IPData?.location.lat} lng={IPData?.location.lng} />
      )}
      {IPData?.messages && (
        <StyledMapFallback>
          <StyledMapFallbackText>
            {IPData?.messages || MAP_FALLBACK_TEXT}
          </StyledMapFallbackText>
        </StyledMapFallback>
      )}
      {(ownIPIsLoading || IPIsLoading) && (
        <LeafletMap lat={MAP_FALLBACK_LAT} lng={MAP_FALLBACK_LNG} />
      )}
    </>
  );
}
