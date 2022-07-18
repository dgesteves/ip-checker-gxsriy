import { useMutation } from "react-query";
import getIPData from "../../services/wookieApi";
import { useEffect, useState } from "react";
import { VALID_IP_ADDRESS } from "../../constants/app";
import { IWookieApiResponse } from "../../services/wookieApi/types";

export default function useIPData(IP: string) {
  const [curData, setCurData] = useState<IWookieApiResponse>();
  const { data, error, isSuccess, isLoading, mutateAsync } =
    useMutation(getIPData);

  useEffect(() => {
    const storageIPData = localStorage.getItem(String(IP));
    if (IP && !storageIPData) {
      mutateAsync(IP).then((data) => {
        if (VALID_IP_ADDRESS.test(IP)) {
          localStorage.setItem(String(IP), JSON.stringify(data));
        }
      });
    } else if (IP && storageIPData) {
      setCurData(JSON.parse(storageIPData));
    }
  }, [IP, mutateAsync]);

  return {
    IPData: data || curData,
    IPIsLoading: isLoading,
    IPError: error,
    IPIsSuccess: isSuccess,
  };
}
