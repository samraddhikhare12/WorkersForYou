import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import WorkerLogin from "./WorkerLogin";

function WorkerRegistration() {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [adharcard, setAdhar] = useState("");
    
    const [flag, setFlag] = useState(false);
    const [workerlogin, setWorkerLogin] = useState(true);
    
  
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      if (!name || !password || !phone || !address) {
        setFlag(true);
      } else {
        setFlag(false);
        localStorage.setItem("sanskarEmail", JSON.stringify(email));
        localStorage.setItem(
          "sanskarPassword",
          JSON.stringify(password)
        );
        console.log("Saved in Local Storage");
  
        setWorkerLogin(!workerlogin);
      }
    }
  
    function handleClick() {
      setWorkerLogin(!workerlogin);
    }
  
   
    
  
    return (
      <>
   
          <div>
            {" "}
            {workerlogin ? (
              <form onSubmit={handleFormSubmit}>
                <h3 className="text-center">Worker's Registration Form</h3>
                
                <div className="form-group">
                  <label>Id</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your id"
                    name="id"
                    onChange={(event) => setId(event.target.value)}
                  />
                </div>
                 
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Full Name"
                    name="name"
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
  
                <div className="form-group">
                  <label>Phone No.</label>
                  <input
                    type="Phone"
                    className="form-control"
                    placeholder="Enter contact no"
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your address"
                    onChange={(event) => setAddress(event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>AdharNumber</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter adharcard number"
                    onChange={(event) => setAdhar(event.target.value)}
                  />
                </div>
  
                {/* <div className="form-group">
                  <label>Choose your Profession</label>
                  <Form.Control
                    as="select"
                    onChange={(event) => setProfession(event.target.value)}
                  >
                    <option>Select</option>
                    <option>Artist</option>
                    <option>Photographer</option>
                    <option>Team Player</option>
                    <option>Full Stack</option>
                  </Form.Control>
                </div> */}
  
                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Register
                </button>
                <p onClick={handleClick} className="forgot-password text-right">
                  Already registered{" "}log in?
                  
                </p>
                {flag && (
                  <Alert color="primary" variant="danger">
                    I got it you are in hurry! But every Field is important!
                  </Alert>
                )}
              </form>
            ) : (
              <WorkerLogin />
            )}
          </div>
      
      </>
    );
  }
  
  export default WorkerRegistration;