import { BUY_ICE_CREAM } from "../constant/cake";

const initialState = {
  numOfIceCream: 20
};

const reducerIceCream = (state = initialState, action) => {
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

export default reducerIceCream;
