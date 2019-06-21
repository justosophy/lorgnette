import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { expect } from 'chai';
import SearchInput from './index';

describe('<SearchInput />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchInput value="" onChange={() => undefined} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders element', () => {
    const wrapper = render(<SearchInput value="" onChange={() => undefined} />);
    expect(wrapper.find('#search-input')).to.have.length(1);
  });

  it('renders search input value', () => {
    const wrapper = render(<SearchInput value="foo" onChange={() => undefined} />);
    expect(wrapper.find('#search-input').prop('value')).to.equal('foo');
  });
});
