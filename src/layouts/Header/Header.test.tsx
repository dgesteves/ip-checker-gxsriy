import { render, screen } from "@testing-library/react";
import { theme } from "../../assets/styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../assets/styles/globalStyles";
import Header from "./index";
import { GETIPDATA_RESPONSE } from "../../constants/tests";
import { HEADER_TITLE } from "../../constants/app";

describe("Header component", () => {
  const onSearch = jest.fn();

  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header IPData={GETIPDATA_RESPONSE} onSearch={onSearch} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with no data", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header IPData={undefined} onSearch={onSearch} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header IPData={GETIPDATA_RESPONSE} onSearch={onSearch} />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render the header title", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header IPData={GETIPDATA_RESPONSE} onSearch={onSearch} />
      </ThemeProvider>
    );

    expect(screen.getByText(HEADER_TITLE)).toBeInTheDocument();
  });

  it("should render the SearchForm component", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header IPData={GETIPDATA_RESPONSE} onSearch={onSearch} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("search-form")).toBeInTheDocument();
  });

  it("should render the InfoCard component", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header IPData={GETIPDATA_RESPONSE} onSearch={onSearch} />
      </ThemeProvider>
    );

    expect(screen.getByTestId("info-card")).toBeInTheDocument();
  });
});
