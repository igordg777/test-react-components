import React from 'react';
import renderer from 'react-test-renderer';
import MyComponent from './MyComponent';

describe('MyComponent', () => {
  it('2 renders correctly ', () => {
    const props = {
      text: 'Hello, world!',
    };

    const component = renderer.create(<MyComponent {...props} />);
    const tree = component.toJSON();

    expect(tree.type).toBe('div');
    expect(tree.props.className).toBe('App');
    expect(tree.children[0].children[0]).toBe(props.text);
  });
});