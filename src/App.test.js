import { render } from "@testing-library/react";
import { sections } from "./utils/constants";
import App from "./App";

test("renders all main sections by ID", () => {
  render(<App />);
  Object.values(sections).forEach(({ elementId }) => {
    expect(document.getElementById(elementId)).toBeInTheDocument();
  });
});
