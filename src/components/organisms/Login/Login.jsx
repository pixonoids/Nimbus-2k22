import { Formik } from 'formik';
import React, { useContext, useEffect, useState } from 'react';
import { useAuth } from '../../../hooks/api/auth';
// import "bootstrap/dist/css/bootstrap.min.css";
import './Login.scss';

export default function Login() {
  const { login, error } = useAuth();

  // EFFECTS
  useEffect(() => {
    document.title = 'Login | Nimbus 2021';
  }, []);

  const initialValues = {
    username: '',
    password: '',
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    await login(values);
    setSubmitting(false);
  };

  return (
    <div className="main">
      <div className="heading">
        <h1>Nimbus</h1>
      </div>
      <div className="container">
        <div className="login">
          <div className="info info-2">Nimbus Events</div>

          <div className="info">
            <div>Create Read Update Delete</div>

            <img src="./images/nimbus-white.png" alt="nimbus-logo"></img>
          </div>
          <div className="form-container">
            <div className="heading">
              <h1>Admin</h1>
              <h3>NIMBUS Clubs and Event Managers</h3>
            </div>
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ handleSubmit, values, handleChange, isSubmitting }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        required
                        className="form-control"
                        type="text"
                        id="username"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        placeholder="username"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        required
                        className="form-control"
                        type="password"
                        id="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                        placeholder="********"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    {error ? (
                      <div className="error">{error.message}</div>
                    ) : null}
                  </div>
                  {isSubmitting ? (
                    <div className="form-control">
                      <div className="progress-horizontal">
                        <div className="bar-horizontal"></div>
                      </div>
                    </div>
                  ) : null}
                  <div className="form-row">
                    <button type="submit" className="btn-submit">
                      Login
                    </button>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
