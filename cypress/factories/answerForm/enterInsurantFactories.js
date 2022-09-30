import fakerBr from 'faker-br';
import array from '../../support/helpful';

const dayjs = require('dayjs');
let date = dayjs().set('year', 2000).format('MM/DD/YYYY');

const gender = ['#gendermale', '#genderfemale'];

const country = [
  'Austria',
  'Australia',
  'Burundi',
  'Botswana',
  'Costa Rica',
  'Croatia',
  'Brazil',
];

const occupation = [
  'Employee',
  'Public Official',
  'Farmer',
  'Unemployed',
  'Selfemployed',
];

const hobbies = [
  '#speeding',
  '#bungeejumping',
  '#cliffdiving',
  '#skydiving',
  '#other',
];

export default {
  get insurantData() {
    return {
      firstName: fakerBr.name.firstName(),
      lastName: fakerBr.name.lastName(),
      birthdate: date,
      gender: gender[array.rand(gender)],
      streetAddress: fakerBr.address.streetAddress(),
      country: country[array.rand(country)],
      zipCode: fakerBr.random.number({ min: 1000, max: 2000 }),
      city: fakerBr.address.city(),
      occupation: occupation[array.rand(occupation)],
      hobbies: hobbies[array.rand(hobbies)],
      webSite: fakerBr.internet.url(),
    };
  },
};
