import React from 'react';
import ReactDOM from 'react-dom';
import Search from './search';

describe('Search component', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});