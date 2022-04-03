import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import Worker from "./Worker";

function Login() {
  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");

  const [flag, setFlag] = useState(false);

  const [worker, setWorker] = useState(true);

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("sanskarPassword")
      .replace(/"/g, "");
    let mail = localStorage.getItem("sanskarEmail").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setWorker(!worker);
      setFlag(false);
    }
  }

  return (
    <div>
      {worker ? (
        <form onSubmit={handleLogin} action="/Worker">
          <h3>LogIn</h3>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(event) => setEmaillog(event.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(event) => setPasswordlog(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-dark btn-lg btn-block">
            Login
          </button>

          {flag && (
            <Alert color="primary" variant="warning">
              Fill correct Info else keep trying.
            </Alert>
          )}
        </form>
      ) : (
        <Worker />
      )}
    </div>
  );
}

export default Login;