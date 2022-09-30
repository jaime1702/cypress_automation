import fakerBr from 'faker-br';
import array from '../../support/helpful';

const dayjs = require('dayjs');
let date = dayjs().format('MM/DD/YYYY');

const fuelType = ['Petrol', 'Diesel', 'Electric Power', 'Gas', 'Other'];

const make = ['Volvo', 'Volkswagen', 'Skoda', 'Porsche', 'Mazda', 'BMW'];

const model = ['Scooter', 'Three-Wheeler', 'Moped', 'Motorcycle'];

export default {
  get vehicleData() {
    return {
      make: make[array.rand(make)],
      performance: fakerBr.random.number({ max: 1000 }),
      dateManufacture: date,
      cylinderCapacity: fakerBr.random.number({ min: 1, max: 2000 }),
      numberOfSeats: fakerBr.random.number({ min: 1, max: 9 }),
      numberOfSeatsMotorCycle: fakerBr.random.number({ min: 1, max: 3 }),
      fuelType: fuelType[array.rand(fuelType)],
      listPrice: fakerBr.random.number({ min: 100, max: 100000 }),
      licenseNumber: fakerBr.random.number({ max: 999999999 }),
      mileage: fakerBr.random.number({ min: 100, max: 100000 }),
      model: model[array.rand(model)],
      payload: fakerBr.random.number({ min: 1, max: 1000 }),
      totalWeight: fakerBr.random.number({ min: 50, max: 50000 }),
    };
  },
};
