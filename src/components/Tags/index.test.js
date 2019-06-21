import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'enzyme';
import { expect } from 'chai';
import Tags from './index';

describe('<Tags />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Tags tagsList={['foo', 'bar']} title="stuff" handler={() => undefined} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders elements', () => {
    const wrapper = render(<Tags tagsList={['foo', 'bar']} title="stuff" handler={() => undefined} />);
    expect(wrapper.find('.tag-button')).to.have.length(2);
  });
});
