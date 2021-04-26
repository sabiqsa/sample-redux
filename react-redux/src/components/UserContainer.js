import React, { useState, useEffect } from "react";

import { fetchUsers } from "../redux";
import { connect } from "react-redux";

const UserContainer = ({ userData, fetchUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {userData.loading && <div>data loading</div>}
      {userData.success && <div>userData.map(name=>name.id)</div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userData: state.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);
