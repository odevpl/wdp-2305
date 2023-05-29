import React from 'react';
import { shallow } from 'enzyme';
import BlogBox from './BlogBox';

describe('Component BlogBox', () => {
  it('should render without crashing', () => {
    const component = shallow(<BlogBox />);
    expect(component).toBeTruthy();
  });
});
