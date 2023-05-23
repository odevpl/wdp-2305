import React from 'react';
import { shallow } from 'enzyme';
import Shop from './Shop';

describe('Shop', () => {
  it('renders without crashing', () => {
    shallow(<Shop />);
  });
});
