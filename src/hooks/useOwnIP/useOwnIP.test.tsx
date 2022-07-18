import { renderHook, waitFor } from "@testing-library/react";
import useOwnIP from "./index";
import { QueryClient, QueryClientProvider } from "react-query";
import { DEFAULT_IP_ADDRESS, GETOWNIP_RESPONSE } from "../../constants/tests";
import { server } from "../../mocks/server";
import { rest } from "msw";
import { IPIFY_API_URL } from "../../constants/app";

describe("useOwnIP hook", () => {
  const queryClient = new QueryClient();

  const wrapper = ({ children }: { children: JSX.Element | JSX.Element[] }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );

  it("should return the correct shape", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when loading", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current.ownIPIsLoading);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when error", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current.ownIPError);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when success", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current.ownIPIsSuccess);

    expect(result.current).toMatchSnapshot();
  });

  it("should return the correct shape when loading", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current.ownIPIsLoading);

    expect(result.current.ownIPIsLoading).toEqual(true);
  });

  it("should return the correct shape when error", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current.ownIPError);

    expect(result.current.ownIPError).toEqual(null);
  });

  it("should return the correct shape when success", async () => {
    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => result.current.ownIPIsSuccess);

    expect(result.current.ownIPIsSuccess).toEqual(false);
  });

  it("should return the correct values after success api call", async () => {
    server.use(
      rest.get(IPIFY_API_URL, (req, res, ctx) => {
        req.url.searchParams.set("format", "json");
        return res(ctx.status(200), ctx.json(GETOWNIP_RESPONSE));
      })
    );

    const { result } = renderHook(() => useOwnIP(), { wrapper });

    await waitFor(() => {
      expect(result.current.ownIP).toBe(DEFAULT_IP_ADDRESS);
      expect(result.current.ownIPIsLoading).toBe(false);
      expect(result.current.ownIPError).toBe(null);
      expect(result.current.ownIPIsSuccess).toBe(true);
    });
  });
});
