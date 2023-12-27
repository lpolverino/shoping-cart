import { render, screen } from "@testing-library/react";
import { Link,MemoryRouter as Rooter } from 'react-router-dom';
import { expect } from "vitest";
import App from "./App";

//im am not very sure about this
describe("App component", () => {
  it("should match snapshot", () => {
    const app = render(<Rooter><App /></Rooter>);
    expect(app).toMatchSnapshot();
});

});