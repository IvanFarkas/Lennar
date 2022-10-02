const invoiceData = {
  company: {
    name: 'Lennar',
    address1: '5505 Blue Lagoon Dr.',
    address2: 'Miami, FL 33126',
    phone: '(800) 532-6993',
  },
  client: {
    name: 'Mr. John Doe',
    phone: '(305) 358-1171',
    email: 'John.Doe@BlackRock.com',
  },
  invoice: {
    id: '$BL666999333',
    date: '04/01/2023',
    dueDate: '05/01/2023',
  },
  products: [
    {
      id: 1,
      item: {
        itemTitle: 'Marina Development',
        desc: 'Marina Development - 300 units',
      },
      type: 'FIXED PRICE - $100K/home',
      quantity: '300',
      price: 30000000,
    },
    {
      id: 2,
      item: {
        itemTitle: 'Lovely Development',
        desc: 'Lovely Development - 100 units',
      },
      type: 'FIXED PRICE - $200K/home',
      quantity: '100',
      price: 20000000,
    },
    {
      id: 3,
      item: {
        itemTitle: 'Big Dog Development',
        desc: 'Big Dog Development - 10 units',
      },
      type: 'FIXED PRICE - $5M/home',
      quantity: '10',
      price: 50000000,
    },
    {
      id: 4,
      item: {
        itemTitle: 'Subtotal',
        desc: '',
      },
      type: '',
      quantity: '',
      price: 50000000,
    },
    {
      id: 5,
      item: {
        itemTitle: 'Rebate',
        desc: '',
      },
      desc: '',
      type: '',
      quantity: '',
      price: 1000000,
    },
    {
      id: 6,
      item: {
        itemTitle: 'Grand Total',
        desc: '',
      },
      type: '',
      quantity: '',
      price: 99000000,
    },
  ],
};
export default invoiceData;
