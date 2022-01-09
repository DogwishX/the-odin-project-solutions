import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import useToggle from "./useToggle";
import useWidthQuery from "./useWidthQuery";

describe("useWidthQuery", () => {
  function WidthTestComponent() {
    return <div data-testid="device">{useWidthQuery()}</div>;
  }

  function renderTestComponent(screenWidth, expectedDevice) {
    window.innerWidth = screenWidth;
    render(<WidthTestComponent />);

    const device = screen.getByTestId("device");
    expect(device.innerHTML).toBe(expectedDevice);
  }

  afterEach(() => cleanup());

  test("mobile", () => {
    renderTestComponent(766, "mobile");
  });
  test("tablet", () => {
    renderTestComponent(769, "tablet");
  });

  test("desktop", () => {
    renderTestComponent(1025, "desktop");
  });
});

describe("useToggle", () => {
  function ToggleTestComponent() {
    const [isToggled, toggle] = useToggle(false);
    return (
      <div data-testid="toggle" onClick={toggle}>
        {isToggled ? "true" : "false"}
      </div>
    );
  }

  beforeEach(() => render(<ToggleTestComponent />));
  afterEach(() => cleanup());

  test("false to true", () => {
    const toggleDiv = screen.getByTestId("toggle");
    fireEvent.click(toggleDiv);
    expect(toggleDiv.innerHTML).toBe("true");
  });

  test("false to true to false", () => {
    const toggleDiv = screen.getByTestId("toggle");
    fireEvent.click(toggleDiv);
    fireEvent.click(toggleDiv);
    expect(toggleDiv.innerHTML).toBe("false");
  });
});
