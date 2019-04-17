import React from 'react';

import { render, cleanup } from 'react-testing-library';
import { renderWithRedux } from './redux-test-helpers';
import { connect } from 'react-redux';

import App from './App';

afterEach(cleanup);

describe('<App />', () => {

  it('renders without crashing', () => {
    renderWithRedux(<App />);
  });
});