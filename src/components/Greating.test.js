import { render, screen } from "@testing-library/react";
import Greating from "./Greating";
describe("Hello World", () => {
  test("render Hello world as a text", () => {
    // Arrange
    render(<Greating />);

    // Act

    // Assert
    const helloWorldElement = screen.getByText("Hello World");
    expect(helloWorldElement).toBeInTheDocument();
  });
});
