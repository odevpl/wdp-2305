import React from 'react';
import { shallow } from 'enzyme';
import CompareBox from './CompareBox';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component CompareBox', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <CompareBox />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
