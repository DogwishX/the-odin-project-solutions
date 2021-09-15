import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditableField from "../EditableField";

let component;
let getByTestId;

beforeEach(() => {
  component = render(<EditableField>Test</EditableField>);
  getByTestId = component.getByTestId;
});

describe("Render Elements", () => {
  test("Render text", () => {
    const textEl = getByTestId("text");

    expect(textEl.textContent).toBe("Test");
  });

  test("Render Button when input is displayed", () => {
    let textEl = getByTestId("text");
    fireEvent.click(textEl);
    textEl = getByTestId("text");

    expect(getByTestId("button").textContent).toBeTruthy();
  });
});

describe("Transformation of text type", () => {
  test("Text field transform into input", () => {
    let textEl = getByTestId("text");
    fireEvent.click(textEl);
    textEl = getByTestId("text");

    expect(textEl.value).toBe("Test");
  });

  test("Input field transform into p on Btn click", () => {
    let textEl = getByTestId("text");
    
    fireEvent.click(textEl); // Transform to Input
    textEl = getByTestId("text");
    const button = getByTestId("button");

    fireEvent.change(textEl, { // Change input value
      target: {
        value: "lol",
      },
    });
    fireEvent.click(button); // Transform to Text/<p></p>
    textEl = getByTestId("text");

    expect(textEl.textContent).toBe("lol");
  });
});
