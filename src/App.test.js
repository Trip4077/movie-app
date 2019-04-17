import React from 'react';

import { render, cleanup } from 'react-testing-library';
import { renderWithRedux } from './redux-test-helpers';
import { connect } from 'react-redux';

import App from './App';

afterEach(cleanup);

describe('<App />', () => {
  const connectedApp = connect(state => ({})(RoutedApp));

  it('renders without crashing', () => {
    renderWithRedux(<App />);
  });
});