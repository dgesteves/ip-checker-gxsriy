import { TileLayer, Marker } from "react-leaflet";
import { StyledMapContainer } from "./styles";
import ILeafletMapProps from "./types";
import costumeMarker from "../costumeMarker";
import RecenterView from "../RecenterView";
import { MAP_TILE_LAYER, MAP_ZOOM } from "../../constants/app";

export default function LeafletMap({ lat, lng }: ILeafletMapProps) {
  return (
    <section role="application">
      <StyledMapContainer
        center={[lat, lng]}
        zoom={MAP_ZOOM}
        scrollWheelZoom={false}
        zoomControl={false}
      >
        <RecenterView center={[lat, lng]} />
        <TileLayer
          attribution={MAP_TILE_LAYER.ATTRIBUTION}
          url={MAP_TILE_LAYER.URL}
        />
        <Marker position={[lat, lng]} icon={costumeMarker} />
      </StyledMapContainer>
    </section>
  );
}
