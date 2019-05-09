import React from 'react';

import {  cleanup, fireEvent } from 'react-testing-library';
import { renderWithRedux } from '../../../redux-test-helpers';

import pear from 'react-test-renderer';

import Thumbnail from '../thumbnail';

afterEach(cleanup);

describe('<Thumbnail />', () => {
  const movie = {
    imdbID: 't1982',
    id: 1,
    Poster: 'link',
    Title: 'Endgame',
    Year: '2019',
  }

  it('renders without crashing', () => {
    renderWithRedux(<Thumbnail movie={movie} />);
  });

  it('renders an add button if not on Profile View', () => {
    const { getByText } = renderWithRedux(<Thumbnail movie={movie} />);

    getByText(/add/i);
  });

  it('renders a remove button if on Profile View', () => {
    const { getByText } = renderWithRedux(<Thumbnail movie={movie} profile />);

    getByText(/close/i);
  });
});