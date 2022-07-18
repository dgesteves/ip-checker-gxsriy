import { useQuery } from "react-query";
import getOwnIP from "../../services/ipifyApi";

export default function useOwnIP() {
  const { data, error, isSuccess, isLoading } = useQuery("ownIP", getOwnIP);

  return {
    ownIP: data?.ip,
    ownIPIsLoading: isLoading,
    ownIPError: error,
    ownIPIsSuccess: isSuccess,
  };
}
