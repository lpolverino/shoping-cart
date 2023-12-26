import { render, screen } from "@testing-library/react";
import { Link,MemoryRouter as Router } from 'react-router-dom';
import ImageSlider from "./ImageSlider";
import { expect } from "vitest";

describe("IMageSLider component", () => {
  it("renders with a link to shop", () => {
    render(<Router><ImageSlider /></Router>);
    expect(screen.getByRole("link",{name:"Go To Shop"}))
    expect(screen.getByText(/Like what you see\?/i))
  });

  it("changes image after a second", () =>{
    
  })
});