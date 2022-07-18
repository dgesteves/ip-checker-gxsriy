import { render, screen } from "@testing-library/react";
import InfoCard from "./index";
import { GETIPDATA_RESPONSE } from "../../constants/tests";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import { theme } from "../../assets/styles/theme";
import { TIME_STANDARD } from "../../constants/app";

describe("InfoCard component", () => {
  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with no data", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={undefined} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render the IP", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );

    expect(screen.getByText(GETIPDATA_RESPONSE.ip)).toBeInTheDocument();
  });

  it("should render the location", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );

    expect(
      screen.getByText((content: any, node: any) => {
        const hasText = (node: any) =>
          node.textContent ===
          `${GETIPDATA_RESPONSE.location.city}, ${GETIPDATA_RESPONSE.location.country} ${GETIPDATA_RESPONSE.location.postalCode}`;
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !hasText(child)
        );

        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });

  it("should render the timezone", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );

    expect(
      screen.getByText((content: any, node: any) => {
        const hasText = (node: any) =>
          node.textContent ===
          `${TIME_STANDARD} ${GETIPDATA_RESPONSE.location.timezone}`;
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !hasText(child)
        );

        return nodeHasText && childrenDontHaveText;
      })
    ).toBeInTheDocument();
  });

  it("should render the ISP", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );

    expect(screen.getByText(GETIPDATA_RESPONSE.isp)).toBeInTheDocument();
  });

  it("should render correct number of info elements", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <InfoCard IPData={GETIPDATA_RESPONSE} />
      </ThemeProvider>
    );

    expect(container.children[0].children).toHaveLength(4);
  });
});
