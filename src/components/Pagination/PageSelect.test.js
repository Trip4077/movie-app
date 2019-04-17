import React from 'react';

import { cleanup, fireEvent } from 'react-testing-library';
import { renderWithRedux } from '../../redux-test-helpers';

import apple from 'react-test-renderer';

import PageSelect from './PageSelect';

afterEach(cleanup);

describe('<PageSelect />', () => {

  it('renders without crashing', () => {
    renderWithRedux(<PageSelect />);
  });

  it('renders unordered list of <li> elements', () => {
    const { getByTestId } = renderWithRedux(<PageSelect pageList={[ 1 ]} />);

    getByTestId('page-select');
  });

  it('renders 2 + pageList\'s length <li> elements', () => {
    const { getByTestId } = renderWithRedux(<PageSelect pageList={[ 1, 2 ]} />);

    const list = getByTestId('page-select');

    expect(list.childNodes.length).toBe(4);
  });

  
  it('renders <li> text to be page number', () =>{
    const { getByTestId } = renderWithRedux(<PageSelect pageList={[ 1, 2, 3, 4 ]} />);

    const list = getByTestId('page-select');
    const li = list.childNodes;

    expect(li[1].textContent).toBe('1');
    expect(li[2].textContent).toBe('2');
    expect(li[3].textContent).toBe('3');
    expect(li[4].textContent).toBe('4');    
  });

  it('fires props function when <li> elements are clicked', () => {
      const mock = jest.fn();
      const { getByTestId } = renderWithRedux(<PageSelect pageList={[ 1, 2, 3 ]} performSearch={mock} />);

      const list = getByTestId('page-select');
      const li = list.childNodes;

      fireEvent.click(li[0]);
      expect(mock).toHaveBeenCalled();

      fireEvent.click(li[2]);
      expect(mock).toHaveBeenCalledTimes(2);

      fireEvent.click(li[4]);
      expect(mock).toHaveBeenCalledTimes(3);
  });

  it('should match snapshot - default', () => {
      const tree = apple.create(<PageSelect />);

      expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should match snapshot - with props', () => {
    const tree = apple.create(<PageSelect pageList={[ 1, 2, 3, 4, 5]} />);

    expect(tree.toJSON()).toMatchSnapshot();
  });
});