import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders site heading', () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Lorgnette | flickr public search</h1>;
  // expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});
