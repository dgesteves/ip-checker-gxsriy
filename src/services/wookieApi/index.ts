import { LOCALHOST_IP, WOOKIE_BASE_API_URL } from "../../constants/app";
import { IWookieApiResponse } from "./types";

export default async function getIPData(
  IP: string
): Promise<IWookieApiResponse> {
  const response = await fetch(
    `${WOOKIE_BASE_API_URL}?ip=${IP || LOCALHOST_IP}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer WookieIP2022",
      },
    }
  );
  return response.json();
}
