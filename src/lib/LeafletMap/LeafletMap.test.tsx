import { render } from "@testing-library/react";
import { theme } from "../../assets/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import LeafletMap from "./index";
import { GETIPDATA_RESPONSE } from "../../constants/tests";

describe("LeafletMap component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LeafletMap
          lat={GETIPDATA_RESPONSE.location.lat}
          lng={GETIPDATA_RESPONSE.location.lng}
        />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LeafletMap
          lat={GETIPDATA_RESPONSE.location.lat}
          lng={GETIPDATA_RESPONSE.location.lng}
        />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });
});
