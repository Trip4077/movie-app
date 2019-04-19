import React from 'react';

import {  cleanup } from 'react-testing-library';
import { renderWithRedux } from '../../../redux-test-helpers';

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
});