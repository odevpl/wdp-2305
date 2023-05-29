import React from 'react';
import { shallow } from 'enzyme';
import Promoted from './Promoted';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component Promoted', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <Promoted />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
