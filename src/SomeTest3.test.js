import React from 'react';
import { create } from 'react-test-renderer';

// Компонент с обработчиком события
function Button({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

// Тестирование обработчика события
describe('Button component', () => {
  test('Should call onClick handler on button click', () => {
    // Создаем мок-функцию для обработчика события
    const onClickMock = jest.fn();

    // Рендерим компонент и передаем мок-функцию в пропс onClick
    const component = create(<Button onClick={onClickMock} />);
    const instance = component.root;

    // Находим кнопку и эмулируем клик
    const button = instance.findByType('button');
    button.props.onClick();
    // button.props.onClick();

    // Проверяем, что обработчик события был вызван один раз
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});