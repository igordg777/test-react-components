import React from 'react';
import  renderer, { render, create, fireEvent } from 'react-test-renderer';
import MyComponent3 from './MyComponent3';

describe('MyComponent3', () => {
  it('increments the counter when the button is clicked', () => {
    // const component = render(<MyComponent3 />);
    // const component = renderer.create(<MyComponent3 />);
    const component = create(<MyComponent3 />);
    const button = component.root.findByType('button');

    fireEvent.click(button);

    expect(component.root.findByType('h1').props.children).toBe('Counter: 1');
  });
});