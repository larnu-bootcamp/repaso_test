import App from "../App";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

describe('App', () => {

  test('Render App', () => {
    render(<App />);
  });

  test('Check that button add two the count', () => {
    render(<App />);
    const button = screen.getByTestId('button');
    fireEvent.click(button);
    expect(screen.getByTestId('button').textContent).toContain('2');
  });
});

