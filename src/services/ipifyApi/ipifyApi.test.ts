import getOwnIP from "./index";
import { VALID_IP_ADDRESS } from "../../constants/app";
import { DEFAULT_IP_ADDRESS } from "../../constants/tests";

describe("IPifyApi getOwnIP function", () => {
  it("should be defined", () => {
    expect(getOwnIP()).toBeDefined();
  });

  it("should return a Promise", () => {
    expect(getOwnIP()).toBeInstanceOf(Promise);
  });

  it("should return a Promise that resolves to an IIpifyApiResponse", async () => {
    const response = await getOwnIP();
    expect(response).toBeInstanceOf(Object);
  });

  it("should return a Promise that resolves to an IIpifyApiResponse with an ip property", async () => {
    const response = await getOwnIP();
    expect(response).toHaveProperty("ip");
  });

  it("should return a Promise that resolves to an IIpifyApiResponse with an ip property that is a string", async () => {
    const response = await getOwnIP();
    expect(typeof response.ip).toBe("string");
  });

  it("should return a Promise that resolves to an IIpifyApiResponse with an ip property that is a valid IP address", async () => {
    const response = await getOwnIP();
    expect(VALID_IP_ADDRESS.test(response.ip)).toEqual(true);
  });

  it("should return a Promise that resolves to an IIpifyApiResponse with an expected ip address", async () => {
    const response = await getOwnIP();
    expect(response.ip).toEqual(DEFAULT_IP_ADDRESS);
  });
});
