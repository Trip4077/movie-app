import React from 'react';

import { cleanup, fireEvent } from 'react-testing-library';
import { renderWithRedux } from '../../redux-test-helpers';

import Navbar from './Navbar';

afterEach(cleanup);

describe('<Navbar />', () => {
  
  it('renders without crashing', () => {
    renderWithRedux(<Navbar />);
  });

  it('should render a logout button', () => {
    const { getByText } = renderWithRedux(<Navbar />);
    
    getByText(/log out/i);
  });

  it('should render a profile link', () => {
    const { getByText } = renderWithRedux(<Navbar />);
    
    getByText(/profile/i);
  });

  it('should render a search link', () => {
    const { getByText } = renderWithRedux(<Navbar />);
    
    getByText(/search/i);
  });

  xit('should fire function when clicked', () => {
    const mock = jest.fn();
    const { getByText } = renderWithRedux(<Navbar logout={mock} />);
    
    const button = getByText(/log out/i);

    console.log(button);

    fireEvent.click(button);
  });
});