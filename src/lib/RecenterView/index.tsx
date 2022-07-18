import { useMap } from "react-leaflet";
import IRecenterViewProps from "./types";

export default function RecenterView({ center }: IRecenterViewProps) {
  const map = useMap();
  map.setView(center);
  return null;
}
