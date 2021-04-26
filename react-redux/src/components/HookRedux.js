import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyCake } from "../redux";

const HookRedux = () => {
  const iniZabran = useSelector(state => state.cake.iniZabran);
  const dispatch = useDispatch();

  const [number, setNumber] = useState(1);

  return (
    <div>
      <div>Hooks</div>
      <h1>Number of cakes - {iniZabran}</h1>

      <input
        type="text"
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(number))}>buy cake</button>
    </div>
  );
};

export default HookRedux;
