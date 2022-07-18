export interface IWookieApiResponse {
  as: IAs;
  ip: string;
  isp: string;
  location: ILocation;
  code?: number;
  messages?: string;
}

interface IAs {
  asn: number;
  domain: string;
  name: string;
  route: string;
  type: string;
}

export interface ILocation {
  city: string;
  country: string;
  geonameId: number;
  lat: number;
  lng: number;
  postalCode: string;
  region: string;
  timezone: string;
}
