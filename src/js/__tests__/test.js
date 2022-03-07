import Validator from '../app';

test('проверка имени на корректность', () => {
  const expected = 'Ivan123_-h';
  const reseived = new Validator('Ivan123_-h');
  expect(reseived.name).toEqual(expected);
});
test('проверка на выброс ошибки', () => {
  expect(() => new Validator('1Ivan123_-h')).toThrow('name is incorrect');
});
