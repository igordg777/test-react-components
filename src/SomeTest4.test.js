import React from 'react';
import { create } from 'react-test-renderer';

// Компонент с состоянием
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment() {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  }

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.increment()}>Increment</button>
      </div>
    );
  }
}

// Тестирование состояния компонента
describe('Counter component', () => {
  test('Should update count state on button click', () => {
    // Рендерим компонент
    const component = create(<Counter />);
    const instance = component.getInstance();

    // Проверяем начальное состояние
    expect(instance.state.count).toBe(0);

    // Находим кнопку и эмулируем клик
    const button = component.root.findByType('button');
    button.props.onClick();

    // Проверяем изменение состояния после клика
    expect(instance.state.count).toBe(1);
  });
});