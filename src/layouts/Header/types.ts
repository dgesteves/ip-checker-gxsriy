import { IWookieApiResponse } from "../../services/wookieApi/types";

export default interface IHeaderProps {
  IPData: IWookieApiResponse | undefined;
  onSearch: (IP: string) => void;
}
