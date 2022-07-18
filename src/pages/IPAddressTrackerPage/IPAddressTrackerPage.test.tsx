import { render, screen } from "@testing-library/react";
import { theme } from "../../assets/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import IPAddressTrackerPage from "./index";
import { QueryClient, QueryClientProvider } from "react-query";

describe("IPAddressTrackerPage component", () => {
  const queryClient = new QueryClient();

  it("renders correctly", async () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <IPAddressTrackerPage />
        </QueryClientProvider>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <IPAddressTrackerPage />
        </QueryClientProvider>
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render Header component", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <IPAddressTrackerPage />
        </QueryClientProvider>
      </ThemeProvider>
    );

    const headerComponent = screen.getByRole("heading");

    expect(headerComponent).toBeInTheDocument();
  });

  it("should render LeafletMap component", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
          <IPAddressTrackerPage />
        </QueryClientProvider>
      </ThemeProvider>
    );

    const leafletMapComponent = screen.getByRole("application");

    expect(leafletMapComponent).toBeInTheDocument();
  });
});
