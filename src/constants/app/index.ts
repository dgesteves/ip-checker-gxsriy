export const HEADER_TITLE = "IP Address Tracker";
export const SEARCH_PLACEHOLDER = "Search for any IP address or domain";
export const TIME_STANDARD = "UTC";
export const IPIFY_API_URL = "https://api.ipify.org";
export const WOOKIE_BASE_API_URL = "https://wookie.codesubmit.io/ipcheck";
export const LOCALHOST_IP = "127.0.0.1";
export const MAP_FALLBACK_TEXT = "No location found for this IP address";
export const MAP_FALLBACK_LAT = 0;
export const MAP_FALLBACK_LNG = 0;
export const MAP_ZOOM = 17;
export const VALID_IP_ADDRESS =
  /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

export enum INFO_CARD_ELEMENTS {
  IP = "ip address",
  LOCATION = "location",
  TIMEZONE = "timezone",
  ISP = "isp",
}

export enum MAP_TILE_LAYER {
  ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
}
