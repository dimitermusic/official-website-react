import { render } from "@testing-library/react";
import App from "./App";

test("renders all main sections by ID", () => {
  render(<App />);

  const ids = ["film-tv", "watch", "tour", "listen", "subscribe"];

  ids.forEach((id) => {
    expect(document.getElementById(id)).toBeInTheDocument();
  });
});
