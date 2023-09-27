
test('Dummy mock function', () => {
  const mock = jest.fn();
let result = mock('foo');

console.log(result)

expect(result).toBeUndefined();
expect(mock).toHaveBeenCalled();
expect(mock).toHaveBeenCalledTimes(1);
expect(mock).toHaveBeenCalledWith('foo');

const mockTwo = jest.fn(() => 'bar');
result = mockTwo('foo');
console.log("Result 2",result)

expect(result).toBe('bar');
});