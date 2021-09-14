import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditableField from "../EditableField";


test('Render text', () => {
  const {getByTestId} = render(EditableField);
  const textEl = getByTestId('text')

})