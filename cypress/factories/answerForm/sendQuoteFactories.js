import fakerBr from 'faker-br';

export default {
  get sendQuoteData() {
    return {
      email: fakerBr.internet.email(),
      phone: '45985745987',
      userName: 'JaimeTeste',
      password: 'J@imeteste123',
      comments: 'Teste realizado por Jaime',
    };
  },
};
