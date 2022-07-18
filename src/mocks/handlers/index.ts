import { rest } from "msw";
import { IPIFY_API_URL, WOOKIE_BASE_API_URL } from "../../constants/app";
import {
  DEFAULT_IP_ADDRESS,
  GETIPDATA_RESPONSE,
  GETOWNIP_RESPONSE,
} from "../../constants/tests";

export const handlers = [
  rest.get(IPIFY_API_URL, (req, res, ctx) => {
    req.url.searchParams.set("format", "json");
    return res(ctx.status(200), ctx.json(GETOWNIP_RESPONSE));
  }),
  rest.get(`${WOOKIE_BASE_API_URL}`, (req, res, ctx) => {
    req.url.searchParams.set("ip", DEFAULT_IP_ADDRESS);
    req.headers.set("Authorization", "Bearer WookieIP2022");
    return res(ctx.status(200), ctx.json(GETIPDATA_RESPONSE));
  }),
];
