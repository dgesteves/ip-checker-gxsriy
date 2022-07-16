import { render } from "@testing-library/react";
import Index from "./index";

describe("Index icon", () => {
  it("should render correctly", () => {
    const { container } = render(<Index />);
    expect(container).toBeInTheDocument();
  });

  it("should have the correct svg", () => {
    const { container } = render(<Index />);
    expect(container).toMatchSnapshot();
  });
});
