/* eslint-disable import/no-anonymous-default-export */
// // const mock = jest.fn();
// // let result = mock('foo');

// // expect(result).toBeUndefined();
// // expect(mock).toHaveBeenCalled();
// // expect(mock).toHaveBeenCalledTimes(1);
// // expect(mock).toHaveBeenCalledWith('foo');

// // const mockTwo = jest.fn(() => 'bar');
// // result = mockTwo('foo');

// // expect(result).toBe('bar');

const data = [
  {
    id: 1,
    name: "Alice",
    points: 15,
  },
  {
    id: 2,
    name: "Bob",
    points: 1,
  },
  {
    id: 3,
    name: "Mike",
    points: 30,
  },
];

export default {
  defaults: { baseUrl: "" },
  get: jest.fn((url) => {
    if (url === "/high-scores") {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data,
      });
    }
  }),
};
