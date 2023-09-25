const countDown = require('../countDown.js')

// Успешное выполнение функции
test('Countdown from 3', () => {
  expect(countDown(3)).toEqual([3, 2, 1])
})

// Неуспешное выполнение функции (например, если передано отрицательное число)
test('Negative input', () => {
  expect(countDown(-1)).toEqual([])
})

// Граничный случай: Countdown from 1
test('Countdown from 1', () => {
  expect(countDown(1)).toEqual([1])
})

// Граничный случай: Countdown from 0
test('Countdown from 0', () => {
  expect(countDown(0)).toEqual([])
})

// Граничный случай: Countdown from a large number (e.g., 100)
test('Countdown from a large number', () => {
  expect(countDown(100)).toEqual(Array.from({ length: 100 }, (_, i) => 100 - i))
})
