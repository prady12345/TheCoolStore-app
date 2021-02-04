import bcrypt from 'bcryptjs';

const data ={
    users: [
        {
          name: 'pradyumna',
          email: 'admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
    products:[
        {
            _id:'1',
            name:'The alchemist',
            category: 'books',
            image:'/images/p1.jpg',
            price: 100,
            countInStock: 7,
            brand: 'A',
            rating: 4,
            numReviews: 6,
            description: 'high quality product',
        },
        {
            _id:'2',
            name:'Rich dad poor dad',
            category: 'books',
            image:'/images/p2.jpg',
            price: 80,
            countInStock: 2,
            brand: 'A',
            rating: 3,
            numReviews: 13,
            description: 'high quality product',
        },
        {
            _id:'3',
            name:'The lean startup',
            category: 'books',
            image:'/images/p3.jpg',
            price: 105,
            countInStock: 17,
            brand: 'A',
            rating: 4.5,
            numReviews: 19,
            description: 'high quality product',
        },
        {
            _id:'4',
            name:'Eleven minutes',
            category: 'books',
            image:'/images/p4.jpg',
            price: 140,
            countInStock: 70,
            brand: 'A',
            rating: 5,
            numReviews: 27,
            description: 'high quality product',
        },
        {
            _id:'5',
            name:'You can win',
            category: 'books',
            image:'/images/p5.jpg',
            price: 95,
            countInStock: 1,
            brand: 'A',
            rating: 2.5,
            numReviews: 6,
            description: 'high quality product',
        },
        {
            _id:'6',
            name:'The chamber of secrets',
            category: 'books',
            image:'/images/p6.jpg',
            price: 125,
            countInStock: 0,
            brand: 'A',
            rating: 4,
            numReviews: 9,
            description: 'high quality product',
        },
        {
            _id:'7',
            name:'My experiments with truth',
            category: 'books',
            image:'/images/p7.jpg',
            price: 195,
            countInStock: 4,
            brand: 'A',
            rating: 4.5,
            numReviews: 30,
            description: 'high quality product',
        },
        {
            _id:'8',
            name:'The jungle book',
            category: 'books',
            image:'/images/p8.jpg',
            price: 65,
            countInStock: 0,
            brand: 'A',
            rating: 3,
            numReviews: 40,
            description: 'high quality product',
        },
    ],
};

export default data;