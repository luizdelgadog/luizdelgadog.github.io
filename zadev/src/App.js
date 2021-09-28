import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Navbar from './components/Navbar';

function App() {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState({ name: "", email:"" });
  const [error, setError] = useState("");

  const Login = details => {

    if (details.email === adminUser.email && details.password === adminUser.password) {
    console.log("Logged in");
    setUser({
      name: details.name,
      email: details.email,
    });
  } else {
    setError("Dados não conferem, tente de novo.");
  }
}

  const Logout = () => {
    setUser({ name: "", email: ""})
    window.location.reload();
  }

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className="welcome-container">
          <div className="navbar-container">
            <Navbar />
            <button onClick={Logout}>LogOut</button>
          </div>

        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )}
    </div>
  );
}

export default App;