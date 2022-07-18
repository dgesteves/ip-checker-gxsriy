import { renderHook, waitFor } from "@testing-library/react";
import useIPData from "./index";
import { QueryClient, QueryClientProvider } from "react-query";
import { DEFAULT_IP_ADDRESS, GETIPDATA_RESPONSE } from "../../constants/tests";
import { server } from "../../mocks/server";
import { rest } from "msw";
import { WOOKIE_BASE_API_URL } from "../../constants/app";

describe("useIPData hook", () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("should return the correct shape", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when loading", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current.IPIsLoading);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when error", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current.IPError);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when success", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current.IPIsSuccess);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when loading", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current.IPIsLoading);

    expect(result.current.IPIsLoading).toEqual(false);
  });

  it("should return the correct shape when error", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current.IPError);

    expect(result.current.IPError).toEqual(null);
  });

  it("should return the correct shape when success", async () => {
    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => result.current.IPIsSuccess);

    expect(result.current.IPIsSuccess).toEqual(false);
  });

  it("should return the correct values after success api call", async () => {
    server.use(
      rest.get(`${WOOKIE_BASE_API_URL}`, (req, res, ctx) => {
        req.url.searchParams.set("ip", DEFAULT_IP_ADDRESS);
        req.headers.set("Authorization", "Bearer WookieIP2022");
        return res(ctx.status(200), ctx.json(GETIPDATA_RESPONSE));
      })
    );

    const { result } = renderHook(() => useIPData(DEFAULT_IP_ADDRESS), {
      wrapper,
    });

    await waitFor(() => {
      expect(result.current.IPData).toEqual(GETIPDATA_RESPONSE);
      expect(result.current.IPIsLoading).toBe(false);
      expect(result.current.IPError).toBe(null);
      expect(result.current.IPIsSuccess).toBe(true);
    });
  });
});
