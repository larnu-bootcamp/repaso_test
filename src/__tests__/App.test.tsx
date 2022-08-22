import App from "../App";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

describe('App', () => {

  test('Check that button add one the count', () => {
    render(<App />);
  });

  test('Check that button add one the count', () => {
    render(<App />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(screen.getByTestId('button').textContent).toContain('1');
  });
});

