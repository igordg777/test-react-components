import React, { useState } from 'react';
import { render, fireEvent } from '@testing-library/react';

// Функциональный компонент с состоянием
const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

// Тестирование состояния функционального компонента
test('Should increment count on button click', () => {
  // Рендерим компонент
  const { getByText } = render(<Counter />);

  // Проверяем начальное значение счетчика
  expect(getByText('Count: 0')).toBeInTheDocument();

  // Находим кнопку и эмулируем клик два раза
  const button = getByText('Increment');
  fireEvent.click(button);
  fireEvent.click(button);

  // Проверяем, что значение счетчика стало равным 2
  expect(getByText('Count: 2')).toBeInTheDocument();
});