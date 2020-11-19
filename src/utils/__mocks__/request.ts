const testQuotes = {
  quotes: [
    {
      id: 0,
      product: 'car',
      name: 'test car one',
      price: 123456,
      features: {
        test: 'just a test',
        'complex-test': 'just an - in it'
      }
    },
    {
      id: 0,
      product: 'bike',
      name: 'test car one',
      price: 123456,
      features: {
        test: 'just a test',
        'complex-test': 'just an - in it'
      }
    }
  ]
};

const Request = {
  get: () => new Promise(resolve => process.nextTick(() => resolve(testQuotes)))
};

export default Request;
