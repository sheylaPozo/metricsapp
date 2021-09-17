const url = 'https://covid-api.mmediagroup.fr/v1/history?country=Argentina&status=Confirmed';

export const getHistory = async (Argentina) => {
  const response = await fetch(`${url}?country=${Argentina}`);

  return response.json();
};

const history = (Argentina) => ({
  type: RETRIEVE_Argentina,
  payload: Argentina,
});

const getFiltered = (filter) => (dispatch) => {
  dispatch(history([]));
  const newFilter = filter.replace(/\s+/g, '-').toLowerCase();
  getArgentina().then((Argentina) => {
    dispatch(history(Argentina.filter((city) => city.id.includes(newFilter))));
  });
};

const receiveArgentina = () => (dispatch) => {
  getArgentina().then((Argentina) => {
    dispatch(history(Argentina));
  });
};

const receivecityDetails = (index) => (dispatch) => {
  getcity(index).then((Argentina) => {
    dispatch(history(Argentina));
  });
};

export {
  history, receiveArgentina, getFiltered, receivecityDetails,
};
