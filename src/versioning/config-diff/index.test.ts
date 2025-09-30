import { expect, test } from 'vitest';
import { diffConfigurations } from './index.ts';

const item1 = {
    _id: '68da83e7f0bc3fee5c3655d7',
    index: 0,
    guid: '89453951-2813-43c0-b118-294133f0e9d4',
    isActive: true,
    balance: '$2,437.78',
    picture: 'http://placehold.it/32x32',
    age: 20,
    eyeColor: 'brown',
    name: 'Howell Barker',
    gender: 'male',
    company: 'UNIWORLD',
    email: 'howellbarker@uniworld.com',
    phone: '+1 (946) 583-3133',
    address: '468 Calyer Street, Whipholt, New Jersey, 8492',
    about: 'Velit Lorem aliqua duis occaecat esse Lorem. Dolor irure amet consectetur incididunt officia quis consectetur pariatur sit. Culpa magna ex esse duis esse. Sunt nostrud sint eu occaecat ex voluptate commodo nisi laboris eu.\r\n',
    registered: '2023-02-09T01:25:37 -01:00',
    latitude: 42.41639,
    longitude: 76.376386,
    tags: ['et', 'occaecat', 'non', 'nulla', 'in', 'quis', 'consectetur'],
    friends: [
        {
            id: 0,
            name: 'Simmons Reyes',
        },
        {
            id: 1,
            name: 'Marlene Case',
        },
        {
            id: 2,
            name: 'Leigh Oconnor',
        },
    ],
    greeting: 'Hello, Howell Barker! You have 6 unread messages.',
    favoriteFruit: 'strawberry',
};
const item2 = {
    _id: '68da842d8e64b65da604ccdc',
    index: 0,
    guid: '3a464339-de52-4837-9b6e-1eb5eba85960',
    isActive: false,
    balance: '$1,076.50',
    picture: 'http://placehold.it/32x32',
    age: 27,
    eyeColor: 'green',
    name: 'Dominique Silva',
    gender: 'female',
    company: 'HOUSEDOWN',
    email: 'dominiquesilva@housedown.com',
    phone: '+1 (850) 503-2773',
    address: '668 Sullivan Street, Allison, Nevada, 5325',
    about: 'Amet sunt nulla irure laboris officia non proident Lorem reprehenderit aliqua eiusmod Lorem proident. Reprehenderit nostrud proident anim elit aliquip. Sint officia quis adipisicing adipisicing fugiat non velit quis irure eu tempor officia. Nostrud minim cillum culpa proident nulla. Excepteur amet minim ea ex aute proident ipsum culpa. Occaecat non cupidatat reprehenderit commodo aliqua laborum enim consequat laborum qui. Labore velit sint aliqua incididunt proident dolor nostrud Lorem Lorem consectetur do sunt eu.\r\n',
    registered: '2014-12-25T11:47:34 -01:00',
    latitude: 83.012364,
    longitude: -103.811153,
    tags: ['ex', 'officia', 'id', 'sint', 'et', 'et', 'consequat'],
    friends: [
        {
            id: 0,
            name: 'Stacie Wilson',
        },
        {
            id: 1,
            name: 'Sonia Bolton',
        },
        {
            id: 2,
            name: 'Beryl Harmon',
        },
    ],
    greeting: 'Hello, Dominique Silva! You have 10 unread messages.',
    favoriteFruit: 'banana',
};

test('diffConfigurations', () => {
    diffConfigurations(item1, item2);
    expect(true).toBe(false);
});
