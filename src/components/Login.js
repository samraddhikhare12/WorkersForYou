import React from 'react'

export default function Login() {
  var attempt = 3;
  function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "root" && password == "root"){
    alert ("Login successfully");
    window.location = "AdminDashboard.js"; // Redirecting to other page.
    return false;
    }
    else{
    attempt --;// Decrementing by one.
    alert("You have left "+attempt+" attempt;");
    // Disabling fields after 3 attempts.
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
    }
    }

    
      
  return (

    <>

     
      <div class="container">
        <div class="main">
          
          <h2>Admin Login</h2>
          <form  id="form_id" method="post" name="myform">
            <div className="form-group">
              <label>User Name :</label>
            <input type="text" name="username" id="username" />
            </div>
            <div className="form-group">
            <label>Password :</label>
            <input type="password" name="password" id="password" />
            </div>
            <div>
            <input type="button" value="Login" id="submit" onclick="validate()" />
            
            </div>
          </form>
          
        </div>
      </div>
      
     
    </>
  )
}
