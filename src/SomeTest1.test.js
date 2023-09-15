import React from 'react';
import TestRenderer from 'react-test-renderer';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('1 renders correctly', () => {
    const component = TestRenderer.create(<MyComponent />);

    expect(component.toJSON()).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    const text = 'Hello, world!';
    const component = TestRenderer.create(<MyComponent text={text} />);
    const instance = component.root;

    expect(instance.findByType('p').props.children).toBe(text);
  });
});