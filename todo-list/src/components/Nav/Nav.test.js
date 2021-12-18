import { render, fireEvent, screen } from "@testing-library/react";
import Nav from "./Nav";

describe("Render", () => {
  beforeEach(() => {
    render(<Nav items={["Inbox", "Today", "This week"]} />);
  });
  test("Nav Items", () => {
    const inbox = screen.getByTestId(/inbox/i);
    const today = screen.getByTestId(/today/i);
    const week = screen.getByTestId(/week/i);
    expect([inbox, today, week].every((item) => item)).toBe(true);
  });
  test("Projects", () => {
    const projects = screen.getByText('Projects');
    expect(projects).toBeTruthy();
  });
  test("Add button", () => {});
});
