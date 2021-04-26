import React from "react";
import { buyCake, buyIceCream } from "../redux";
import { connect } from "react-redux";

const CakeContainter = props => {
  return (
    <div>
      <h1>Count Cake - {props.iniZabran}</h1>

      <button onClick={props.buyCake}>Buy Cake</button>

      <div>
        <h1>Count Ice Cream - {props.numOfIceCream}</h1>

        <button onClick={props.buyIceCream}>Buy Cake</button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    iniZabran: state.cake.iniZabran,
    numOfIceCream: state.iceCream.numOfIceCream
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIceCream: () => dispatch(buyIceCream())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainter);
