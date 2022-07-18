import { render } from "@testing-library/react";
import { theme } from "../../assets/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import RecenterView from "./index";
import { GETIPDATA_RESPONSE } from "../../constants/tests";
import { MapContainer } from "react-leaflet";

describe("InfoCard component", () => {
  const center: [number, number] = [
    GETIPDATA_RESPONSE.location.lat,
    GETIPDATA_RESPONSE.location.lng,
  ];

  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MapContainer>
          <RecenterView center={center} />
        </MapContainer>
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MapContainer>
          <RecenterView center={center} />
        </MapContainer>
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });
});
