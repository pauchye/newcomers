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
      {
    eventId: '4',
    date: '2025-04-19',
    time: '3:00pm',
    recurring: false,
    cost: 0,
    regUrl: 'string',
    volunteerId: 0,
    address: '4 Danbury Rd, Wilton, CT 06897',
    venueName: 'Sly Bandit Brewing Company',
    locationUrl: 'https://maps.app.goo.gl/wK8RBjHK1GAHLG5X7',
    name: 'Sly Bandit Brewing Happy Hour',
    label: ['everyone'], // target audience
    registerUrl: 'https://forms.gle/rrZom7TNgVz23Xz1A',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: '',
    isSoldOut: false,
    description: `New to Wilton? Looking to meet new people? <br/> Join the Wiltonians, Newcomers & Neighbors for a happy hour at Sly Bandit Brewing on April 19th stop by anytime between 3-5pm! <br/> This family-friendly event welcomes all so bring the whole crew along. <br/> It's the perfect way to connect with your neighbors.`,
  },
        {
    eventId: '5',
    date: '2025-05-11',
    time: '10:00am',
    recurring: false,
    cost: 0,
    regUrl: 'string',
    volunteerId: 0,
    address: '236 Danbury Rd, Wilton, CT 06897',
    venueName: 'Wilton Firehouse',
    locationUrl: 'https://maps.app.goo.gl/2YB1xKyouy4MF7kj8',
    name: 'Meet our Hometown Heroes ',
    label: ['everyone', 'family'], // target audience
    registerUrl: 'https://forms.gle/Anoq9B5PvGn1XEBZ8',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: '',
    isSoldOut: false,
    description: `Join the Wiltonians, Newcomers & Neighbors for an exciting visit to our local firehouse! We’ll meet our hometown heroes and learn all about their jobs, the gear, and of course – their trucks!  <br/> Adults and Kids of all ages (with proper supervision) <br/> Free to register, maximum of 15 families`,
  },
          {
    eventId: '6',
    date: '2025-06-21',
    time: 'TBD',
    recurring: false,
    cost: 0,
    regUrl: 'string',
    volunteerId: 0,
    address: `Your place or your neighbor's place`,
    venueName: `Your place or your neighbor's place`,
    locationUrl: '',
    name: 'Summer Solstice Supper Club (registration closes 06/01)',
    label: ['adults'], // target audience
    registerUrl: 'https://forms.gle/wz7NaBAeawzKhPLE6',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: '',
    isSoldOut: false,
    description: `Mark your calendars – registration closes on June 1st! <br/> Supper Club is a series of potluck dinners hosted in the homes of our Newcomers, creating a casual and friendly environment to connect. After you register, you'll be grouped with 6-14 other people and assigned a dish/beverages to contribute. We'll provide ideas, but feel free to cook or purchase your assigned item. Our generous host(s) will be providing the main dish and a welcoming atmosphere – your fellow attendees will bring the rest of the deliciousness! <br/> *Reminder this is an adults-only event.`,
  },
            {
    eventId: '7',
    date: '2025-07-05',
    time:'10:00am',
    recurring: false,
    cost: 5,
    regUrl: 'string',
    volunteerId: 0,
    address: `52 Lovers Ln, Wilton, CT 06897`,
    venueName: `Merwin Meadows Park`,
    locationUrl: 'https://maps.app.goo.gl/VQ7mkTAJn2e7ZchG8',
    name: 'Popsicles in the Park',
    label: ['kids'], // target audience
    registerUrl: 'https://forms.gle/ppSXTc8ZuWwwZFMc8',
    canVolunteer: false,
    volunteerUrl: '#',
    imageName: '',
    isSoldOut: false,
    description: `Join the Wiltonians, Newcomers & Neighbors at Merwin Meadows Park (bring your pass) to explore the fun playgrounds, meet other newcomers and cool off with a delicious popsicle! <br/> This family-friendly event welcomes all so bring the whole crew along.`,
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
