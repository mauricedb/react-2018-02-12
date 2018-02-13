import React from 'react';
import { shallow } from 'enzyme';
import reactTestRenderer from "react-test-renderer";

import Counter from './Counter';

describe('The Counter component', () => {
  let greeter;

  beforeEach(() => {
    greeter = shallow(<Counter />);
  });

  it('should render the initial count', () => {
    expect(greeter.find('p').text()).toBe('The count = 0');
  });

  it('should increment the count in click', () => {
    greeter.find('button').simulate('click');
    expect(greeter.find('p').text()).toBe('The count = 1');
  });

  it('should increment the count in the state click', () => {
    greeter.find('button').simulate('click');
    expect(greeter.state('counter')).toBe(1);
  });

  it('should render 5 aftert setting state', () => {
    greeter.setState({ counter: 5 });
    expect(greeter.find('p').text()).toBe('The count = 5');
  });

  it("renders the same tree", () => {
    const tree = reactTestRenderer
      .create(<Counter />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

});
