import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import ReactRedux from "./components/CakeContainter";
import HookRedux from "./components/HookRedux";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HookRedux />
        <ReactRedux />
        <ItemContainer iniZabran />
        <ItemContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
