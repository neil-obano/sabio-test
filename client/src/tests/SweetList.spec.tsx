import React from 'react';
import { render, screen } from '@testing-library/react';
import SweetList from '../components/SweetList';
import { createSweetList } from './utils/CreateTestObjs';

describe("SweetListComponent", () => {
  it('renders a li containing the text mars bar and chocolate', () => {
    render(<SweetList sweets={createSweetList()}/>);
    const marsBar = screen.getByText("Name: mars bar flavor: chocolate");
    expect(marsBar).toBeInTheDocument();
    const snickers = screen.getByText("Name: snickers flavor: chocolate");
    expect(snickers).toBeInTheDocument();
  })

  it('renders nothing when there are no sweets', () => {
    render(<SweetList sweets={[]}/>);

    let listText = screen.queryByText(/Name: mars bar flavor: chocolate /i);
    expect(listText).not.toBeInTheDocument();
  })
});
