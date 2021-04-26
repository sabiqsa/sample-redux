import { BUY_CAKE } from "../constant/cake";

const initialState = {
  iniZabran: 10
};

const cakeReducers = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        iniZabran: state.iniZabran - action.payload
      };
    default:
      return state;
  }
};

export default cakeReducers;
