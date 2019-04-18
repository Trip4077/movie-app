import React from 'react';

import {  cleanup } from 'react-testing-library';
import { renderWithRedux } from './redux-test-helpers';

import App from './App';

afterEach(cleanup);

describe('<App />', () => {

  it('renders without crashing', () => {
    renderWithRedux(<App />);
  });
});