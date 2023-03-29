// import Details from "../components/reservationDetails";

let initialState = null;

const stateHandler = (state) => {
  if (initialState === null) initialState = state;

  const handler = (newState) => {
    initialState = newState;
    // Details();
  };

  return {
    state: initialState,
    handler: handler,
  };
};

export default stateHandler;
