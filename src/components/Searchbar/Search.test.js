import React from 'react';

import { render, cleanup, fireEvent } from 'react-testing-library';
import { renderWithRedux } from '../../redux-test-helpers';
import { connect } from 'react-redux';

import Search from './Search';

afterEach(cleanup);

describe('<Search />', () => {

  it('renders without crashing', () => {
    renderWithRedux(<Search />);
  });

  it('renders a search form', () => {
    const { getByTestId } = renderWithRedux(<Search />);

    getByTestId('search-form');
  })

  it('renders "Search for Title" label', () => {
    const { getByLabelText } = renderWithRedux(<Search />);

    getByLabelText(/search by title/i);
  });

  it('renders search button', () => {
    const { getByText } = renderWithRedux(<Search />);

    getByText(/search$/i);
  });

  it('renders passed value as input value', () => {
    const { getByDisplayValue } = renderWithRedux(<Search search='movie' />);

    getByDisplayValue(/movie/i);
  });

  it('fires props function when search button is clicked', () => {
    const mock = jest.fn();
    const { getByText } = renderWithRedux(<Search performSearch={mock} />);

    const button = getByText(/search$/i).parentElement;

    fireEvent.click(button);

    expect(mock).toHaveBeenCalled();
  });

  it('fires props function when form is submitted', () => {
    const mock = jest.fn();
    const { getByTestId } = renderWithRedux(<Search performSearch={mock} />);

    const form = getByTestId('search-form');

    fireEvent.submit(form, {});

    expect(mock).toHaveBeenCalled();
  });

  it('fires props function when input is changed', () => {
    const mock = jest.fn();
    const { getByDisplayValue } = renderWithRedux(<Search search='movie' handleChange={mock} />);

    const input = getByDisplayValue(/movie/i);
    
    fireEvent.change(input, { target: { value: 'movies' } });

    expect(mock).toHaveBeenCalled();
  })
});