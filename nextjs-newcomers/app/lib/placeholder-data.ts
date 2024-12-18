// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:

// import { freemem } from "os";

// https://nextjs.org/learn/dashboard-app/fetching-data
const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    password: '123456',
  },
];

const customers = [
  {
    id: 'd6e15727-9fe1-4961-8c5b-ea44a9bd81aa',
    name: 'Evil Rabbit',
    email: 'evil@rabbit.com',
    image_url: '/customers/evil-rabbit.png',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/customers/delba-de-oliveira.png',
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/customers/lee-robinson.png',
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/customers/michael-novotny.png',
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/customers/amy-burns.png',
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/customers/balazs-orban.png',
  },
];

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    customer_id: customers[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    customer_id: customers[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    customer_id: customers[5].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    customer_id: customers[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    customer_id: customers[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    customer_id: customers[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    customer_id: customers[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    customer_id: customers[5].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    customer_id: customers[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    customer_id: customers[5].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    customer_id: customers[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const revenue = [
  { month: 'Jan', revenue: 2000 },
  { month: 'Feb', revenue: 1800 },
  { month: 'Mar', revenue: 2200 },
  { month: 'Apr', revenue: 2500 },
  { month: 'May', revenue: 2300 },
  { month: 'Jun', revenue: 3200 },
  { month: 'Jul', revenue: 3500 },
  { month: 'Aug', revenue: 3700 },
  { month: 'Sep', revenue: 2500 },
  { month: 'Oct', revenue: 2800 },
  { month: 'Nov', revenue: 3000 },
  { month: 'Dec', revenue: 4800 },
];

const events = [
  {
    eventId: '0',
    date: '2024-09-21',
    timeStart: '11am',
    duration: 60, //minutes
    recurring: false,
    cost: 0,
    address: '137 Old Ridgefield Rd, Wilton, CT 06897',
    venueName: 'Wilton Library',
    locationUrl: 'https://g.co/kgs/tUkZ8Vs',
    name: 'Volunteer fair',
    label: ['all'], // target audience
    registerUrl: '#',
    canVolunteer: true,
    volunteerUrl: '#',
    imageName: 'library',
    isSoldOut: false,
    description: undefined,
  },
  {
    eventId: '1',
    date: '2024-09-28',
    time: '6pm',
    recurring: false,
    cost: 25, //dollars
    regUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScyVPaF_vI_ab9ODZhaipwuyRgw66Yzfu4f7OYzz7qR0Bxt5Q/viewform',
    address: '276 Ridgefield Rd, Wilton, CT 06897, USA',
    venueName: 'browngrotta arts',
    locationUrl: 'https://maps.app.goo.gl/VrQGRyzRmRfXKdkf8',
    name: 'Revival Happy Hour',
    label: ['21+'], // target audience
    registerUrl: '#',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: 'happyhour',
    isSoldOut: false,
    description: undefined,
  },
  {
    eventId: '2',
    date: '2024-10-11',
    time: '4pm',
    recurring: false,
    cost: 0,
    regUrl: 'string',
    volunteerId: 0,
    address: '137 Old Ridgefield Rd, Wilton, CT 06897',
    venueName: 'Wilton Library',
    locationUrl: 'https://g.co/kgs/tUkZ8Vs',
    name: 'Build a scarecrow',
    label: ['kids'], // target audience
    registerUrl: '#',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: 'scarecrow',
    isSoldOut: false,
    description: undefined,
  },
    {
    eventId: '3',
    date: '2024-12-19',
    time: '5:30pm',
    recurring: false,
    cost: 30,
    regUrl: 'string',
    volunteerId: 0,
    address: '644 Danbury Rd, Wilton, CT 06897',
    venueName: 'The Play Place Wilton',
    locationUrl: 'https://maps.app.goo.gl/i9bduu1ReaAUC9b86',
    name: 'Family fun night',
    label: ['kids'], // target audience
    registerUrl: '#',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: 'familyfun1',
    isSoldOut: false,
    description: undefined,
  },
]

const volunteering = [
  {
    volunteerId: 0,
    volRegUrl: 'string',
    eventId: 0,
    volunteeringType: 'string', // running, craft
    volunteerName: 'Scarecrow building',
    age: '12+'
  }
]

export { users, customers, invoices, revenue, events, volunteering };
