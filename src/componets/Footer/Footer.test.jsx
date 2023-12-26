import { render, screen } from "@testing-library/react";
import { Link,MemoryRouter as Router } from 'react-router-dom';
import { expect } from "vitest";
import Footer from "./Footer";

describe("Footer component", () => {
  it("Render link to the github Project", () => {
    render(<Footer />);
    expect(screen.getByText(/\@lpolverino/))
    expect(screen.getByRole("link").textContent).toMatch(/look the project Repository/i)
  });

});