import getIPData from "./index";
import { DEFAULT_IP_ADDRESS, GETIPDATA_RESPONSE } from "../../constants/tests";

describe("WookieApi getIPData function", () => {
  it("should be defined", () => {
    expect(getIPData(DEFAULT_IP_ADDRESS)).toBeDefined();
  });

  it("should return a Promise", () => {
    expect(getIPData(DEFAULT_IP_ADDRESS)).toBeInstanceOf(Promise);
  });

  it("should return a Promise that resolves to an IWookieApiResponse", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response).toBeInstanceOf(Object);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with expected properties", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response).toHaveProperty("ip");
    expect(response).toHaveProperty("as");
    expect(response).toHaveProperty("isp");
    expect(response).toHaveProperty("location");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with 'as' expected properties", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.as).toHaveProperty("asn");
    expect(response.as).toHaveProperty("domain");
    expect(response.as).toHaveProperty("name");
    expect(response.as).toHaveProperty("route");
    expect(response.as).toHaveProperty("type");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with 'location' expected properties", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location).toHaveProperty("city");
    expect(response.location).toHaveProperty("country");
    expect(response.location).toHaveProperty("geonameId");
    expect(response.location).toHaveProperty("lat");
    expect(response.location).toHaveProperty("lng");
    expect(response.location).toHaveProperty("postalCode");
    expect(response.location).toHaveProperty("region");
    expect(response.location).toHaveProperty("timezone");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'ip' property that is a string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.ip).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'ip' address", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.ip).toEqual(DEFAULT_IP_ADDRESS);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'isp' property that is a string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.isp).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'isp' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.isp).toEqual(GETIPDATA_RESPONSE.isp);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'as' property that is an object", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.as).toBe("object");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'as' property 'asn' that is an number", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.as.asn).toBe("number");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'asn' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.as.asn).toEqual(GETIPDATA_RESPONSE.as.asn);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'as' property 'domain' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.as.domain).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'domain' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.as.domain).toEqual(GETIPDATA_RESPONSE.as.domain);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'as' property 'name' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.as.name).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'name' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.as.name).toEqual(GETIPDATA_RESPONSE.as.name);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'as' property 'route' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.as.route).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'route' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.as.route).toEqual(GETIPDATA_RESPONSE.as.route);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'as' property 'type' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.as.type).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'type' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.as.type).toEqual(GETIPDATA_RESPONSE.as.type);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'city' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.city).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'city' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.city).toEqual(GETIPDATA_RESPONSE.location.city);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'country' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.country).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'country' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.country).toEqual(
      GETIPDATA_RESPONSE.location.country
    );
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'geonameId' that is an number", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.geonameId).toBe("number");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'geonameId' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.geonameId).toEqual(
      GETIPDATA_RESPONSE.location.geonameId
    );
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'lat' that is an number", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.lat).toBe("number");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'lat' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.lat).toEqual(GETIPDATA_RESPONSE.location.lat);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'lng' that is an number", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.lng).toBe("number");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'lng' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.lng).toEqual(GETIPDATA_RESPONSE.location.lng);
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'postalCode' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.postalCode).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'postalCode' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.postalCode).toEqual(
      GETIPDATA_RESPONSE.location.postalCode
    );
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'region' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.region).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'region' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.region).toEqual(
      GETIPDATA_RESPONSE.location.region
    );
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an 'location' property 'timezone' that is an string", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(typeof response.location.timezone).toBe("string");
  });

  it("should return a Promise that resolves to an IWookieApiResponse with an expected 'timezone' value", async () => {
    const response = await getIPData(DEFAULT_IP_ADDRESS);
    expect(response.location.timezone).toEqual(
      GETIPDATA_RESPONSE.location.timezone
    );
  });
});
