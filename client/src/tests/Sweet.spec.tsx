import React from 'react';
import { render, screen } from '@testing-library/react';
import Sweet from '../components/Sweet';

describe("SweetComponent", () => {
  it('renders a li containing the text mars bar and chocolate', () => {
    render(<Sweet name="mars bar" flavor="chocolate"/>);
    const listText = screen.getByText("Name: mars bar flavor: chocolate");
    expect(listText).toBeInTheDocument();
  })

  it('renders nothing when text mars bar and chocolate', () => {
    render(<Sweet name="mars bar" flavor="chocolate"/>);

    let listText = screen.queryByText(/Name: mars bar flavor: chocolate /i);
    expect(listText).not.toBeInTheDocument();
  })
});
