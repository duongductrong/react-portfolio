const styles = `
.container {
  color: red;
}
`;
const actions = `
const getTodo = () => {
  return {
    type: 'GET_TODO',
    payload: {}
  }
}
`;
const reducers = ``;
const sagas = ``;
const thunks = ``;

const config = {
  baseUrl: "src",
  typescript: false,
  reactNative: false,
  templates: {
    styles,
    actions,
    reducers,
    sagas,
    thunks,
  },
};
module.exports = config;