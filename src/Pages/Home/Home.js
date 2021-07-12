import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { auth } from "../../redux/actions/authActions";

import "./Home.css";

function Home({ onSubmit, loading, error, user }) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const inputHandler = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(values.username, values.password);
  };

  let form = (
    <form onSubmit={onFormSubmit}>
      <div className="form-group">
        <label>Username</label>
        <input
          className="form-control"
          type="text"
          name="username"
          value={values.username}
          onChange={inputHandler}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={values.password}
          onChange={inputHandler}
        />
      </div>
      {loading ? (
        <div className="loading"></div>
      ) : (
        <button className="btn btn-primary" type="submit">
          Sign in
        </button>
      )}
    </form>
  );
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6">
          {user ? <Redirect to="/admin" /> : null}
          <div>{error ? error : null}</div>
          {form}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (username, password) => dispatch(auth(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
