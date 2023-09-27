const data = [
  {
    id: 1,
    name: 'Alice',
    points: 15,
  },
  {
    id: 2,
    name: 'Frankie',
    points: 10,
  },
  {
    id: 3,
    name: 'Dariia',
    points: 20,
  },
];

export default {
  defaults: {baseUrl: ''},
  get: jest.fn((url) => {
    console.log(url)
    if (url === '/high-scores') {
      return Promise.resolve({
        status: 200,
        statusText: "OK",
        data
      });
    }
  })
};