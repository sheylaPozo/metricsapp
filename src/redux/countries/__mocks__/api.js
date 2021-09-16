export const getCountries = async () => Promise.resolve({
  Testing1: {
    All: {
      confirmed: 5,
      country: 'Testing1',
    },
  },
  Testing2: {
    All: {
      confirmed: 8,
      country: 'Testing2',
    },
  },
});

export const getCountry = async () => Promise.resolve({
  All: {
    confirmed: 3,
    country: 'All',
  },
  Testing3: {
    confirmed: 4,
  },
});
