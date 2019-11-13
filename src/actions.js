import request from "superagent";

export const ALL_ITEMS = "ALL_ITEMS";

const baseUrl = "http://localhost:4003";

function allItems(payload) {
  return {
    type: ALL_ITEMS,
    payload
  };
}

export const getItems = () => (dispatch, getState) => {
  const state = getState();
  const { items } = state;

  if (!items.length) {
    request(`${baseUrl}/item`)
      .then(response => {
        const action = allItems(response.body);

        dispatch(action);
      })
      .catch(console.error);
  }
};

export const NEW_ITEM = "NEW_ITEM";

function newItem(payload) {
  return {
    type: NEW_ITEM,
    payload
  };
}

export const createItem = data => (dispatch, getState) => {
  const state = getState();
  const { seller } = state;

  request
    .post(`${baseUrl}/item`)
    .send(data)
    .set("Authorization", `Bearer ${seller}`)
    .then(response => {
      const action = newItem(response.body);

      dispatch(action);
    })
    .catch(console.error);
};

export const JWT = "JWT";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}
export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/logins`)
    .send({ email, password })
    .then(response => {
      const action = jwt(response.body.jwt);

      dispatch(action);
    });
};

export const signUp = (email, password) => dispatch => {
  request.post(`${baseUrl}/seller`).send({ email, password });
};
