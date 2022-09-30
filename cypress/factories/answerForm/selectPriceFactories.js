import array from '../../support/helpful';

const price = [
  '#selectsilver',
  '#selectgold',
  '#selectplatinum',
  '#selectultimate',
];

export default {
  get selectPriceData() {
    return {
      price: price[array.rand(price)],
    };
  },
};
