import array from '../../support/helpful';

const dayjs = require('dayjs');
let date = dayjs().set('year', 2024).format('MM/DD/YYYY');

const insuranceSum = [
  '3000000',
  '5000000',
  '7000000',
  '10000000',
  '15000000',
  '20000000',
  '25000000',
  '30000000',
  '35000000',
];

const meritRating = [
  'Bonus 1',
  'Bonus 2',
  'Bonus 3',
  'Bonus 4',
  'Bonus 5',
  'Bonus 6',
  'Bonus 7',
  'Bonus 8',
  'Bonus 9',
  'Malus 10',
];

const damageInsurance = ['No Coverage', 'Partial Coverage', 'Full Coverage'];

const optionalProducts = ['#EuroProtection', '#LegalDefenseInsurance'];

const courtesyCar = ['No', 'Yes'];

export default {
  get productData() {
    return {
      startDate: date,
      insuranceSum: insuranceSum[array.rand(insuranceSum)],
      meritRating: meritRating[array.rand(meritRating)],
      damageInsurance: damageInsurance[array.rand(damageInsurance)],
      optionalProducts: optionalProducts[array.rand(optionalProducts)],
      courtesyCar: courtesyCar[array.rand(courtesyCar)],
    };
  },
};
