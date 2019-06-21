import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { expect } from 'chai';
import Logo from './index';

describe('<Logo />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Logo />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders element', () => {
    const wrapper = render(<Logo />);
    expect(wrapper.hasClass('logo')).to.equal(true);
  });
});
