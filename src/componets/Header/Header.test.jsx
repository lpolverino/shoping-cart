
import { render, screen } from "@testing-library/react";
import { Link,MemoryRouter as Router } from 'react-router-dom';
import Header from "./Header";
import { expect } from "vitest";

describe("Header component", () => {
  it("renders with two buttons and the cart icon", () => {
    render(<Router><Header /></Router>);
    expect(screen.getByRole("navigation"))
    expect(screen.getByTestId("shop-element"))
  });
});
