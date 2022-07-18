import { IPIFY_API_URL } from "../../constants/app";
import { IIpifyApiResponse } from "./types";

export default async function getOwnIP(): Promise<IIpifyApiResponse> {
  const response = await fetch(`${IPIFY_API_URL}?format=json`);
  return response.json();
}
