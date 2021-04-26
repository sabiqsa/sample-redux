import { combineReducers } from "redux";

import cakeReducers from "./reducers/cake";
import iceCreamReducers from "./reducers/iceCream";
import userReducer from "./reducers/user";

const rootReducers = combineReducers({
  cake: cakeReducers,
  iceCream: iceCreamReducers,
  users: userReducer
});

export default rootReducers;
