import React from 'react';
import { shallow } from 'enzyme';
import BlogFeature from './BlogFeature';
describe('Component BlogFeature', () => {
  it('should render without crashing', () => {
    const component = shallow(<BlogFeature />);
    expect(component).toBeTruthy();
  });
});
