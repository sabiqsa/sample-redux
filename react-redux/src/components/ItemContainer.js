import React from "react";
import { connect } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

const ItemContainer = props => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>click me</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.iniZabran
    ? state.cake.iniZabran
    : state.iceCream.numOfIceCream;

  return {
    item: itemState
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const itemFunction = ownProps.iniZabran
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());

  return {
    buyItem: itemFunction
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemContainer);
