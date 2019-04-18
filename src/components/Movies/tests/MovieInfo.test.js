import React from 'react';

import {  cleanup } from 'react-testing-library';
import { renderWithRedux } from '../../../redux-test-helpers';

import pear from 'react-test-renderer';

import MovieInfo from '../MovieInfo';

afterEach(cleanup);

describe('<MovieInfo />', () => {
  const movie = {
     Poster: 'link',
     Title: 'Avengers',
     Plot: 'Fight Bad Guys',
     Rated: 'PG13',
     Genre: 'Action',
     Runtime: 'Couple Hours',
     Released: '12-12-1212',
     Actors: 'RDJ',
     Production: 'Disney',
     BoxOffice: 'a lot'
  }

  it('renders without crashing', () => {
    renderWithRedux(<MovieInfo movie={movie} />);
  });

  it('renders a "Title" row', () => {
      const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

      getByText(/title:/i);
  });

  it('renders a "Synopsis" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/synopsis:/i);
  });

  it('renders a "Rating" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/rating:/i);
  });

  it('renders a "Genre" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/genre:/i);
  });

  it('renders a "Runtime" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/runtime:/i);
  });

  it('renders a "Release  Date" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/release date:/i);
  });

  it('renders a "Cast" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/cast:/i);
  });

  it('renders a "Production" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/production:/i);
  });

  it('renders a "Box Office" row', () => {
    const { getByText } = renderWithRedux(<MovieInfo movie={movie} />);

    getByText(/box office:/i);
  });

  it('should match snapshot - with props only', () => {
    const tree = pear.create(<MovieInfo movie={movie} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});