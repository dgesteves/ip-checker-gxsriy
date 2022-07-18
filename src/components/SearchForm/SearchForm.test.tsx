import { render, screen, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../assets/styles/theme";
import GlobalStyles from "../../assets/styles/globalStyles";
import SearchForm from "./index";
import { MAP_FALLBACK_TEXT, SEARCH_PLACEHOLDER } from "../../constants/app";

describe("SearchForm component", () => {
  const onSearch = jest.fn();
  const searchError = "";

  it("renders correctly", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={searchError} />
      </ThemeProvider>
    );
    expect(container).toMatchSnapshot();
  });

  it("should render without crashing", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={searchError} />
      </ThemeProvider>
    );

    expect(container).toBeInTheDocument();
  });

  it("should render the search input", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={searchError} />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText(SEARCH_PLACEHOLDER);

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
  });

  it("should have correct value on search input change", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={searchError} />
      </ThemeProvider>
    );

    const inputElement = screen.getByPlaceholderText(SEARCH_PLACEHOLDER);

    expect(inputElement).toHaveValue("");

    fireEvent.change(inputElement, { target: { value: "test" } });

    expect(inputElement).toHaveValue("test");
  });

  it("should render the search button", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={searchError} />
      </ThemeProvider>
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should call onSearch function when search button is clicked", async () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={searchError} />
      </ThemeProvider>
    );

    expect(onSearch).not.toHaveBeenCalled();

    const searchButton = screen.getByRole("button");

    fireEvent.click(searchButton);

    expect(onSearch).toHaveBeenCalled();
  });

  it("should render the search error", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={MAP_FALLBACK_TEXT} />
      </ThemeProvider>
    );

    expect(screen.getByText(MAP_FALLBACK_TEXT)).toBeInTheDocument();
  });

  it("should render the search error with correct error message", () => {
    render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SearchForm onSearch={onSearch} searchError={MAP_FALLBACK_TEXT} />
      </ThemeProvider>
    );

    const pElement = screen.getByText(MAP_FALLBACK_TEXT);

    expect(pElement.textContent).toBe(MAP_FALLBACK_TEXT);
  });
});
