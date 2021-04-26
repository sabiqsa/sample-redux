const redux = require("redux");
const reduxLogger = require("redux-logger");

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";

function buyCake() {
  return {
    type: BUY_CAKE
  };
}

function buyIceCream() {
  return {
    type: BUY_ICE_CREAM
  };
}

// (prevstate, action) = state

const cakeInitialState = {
  numOfCakes: 10
};

const iceCreamInitialState = {
  numOfIceCream: 20
};

const reducerCake = (state = cakeInitialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1
      };

    default:
      return state;
  }
};

const reducerIceCream = (state = iceCreamInitialState, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: reducerCake,
  ice: reducerIceCream
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state", store.getState());
const unsubscribe = store.subscribe(() => {});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
