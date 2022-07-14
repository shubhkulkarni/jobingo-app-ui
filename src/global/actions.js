const actions = {
  setState: (store, stateKey, newVal) => {
    store.setState({ [stateKey]: newVal });
    console.log("store:", store);
  }
};

export default actions;
