import React, { useState } from "react";

import "../assets/css/main.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here
  };

  return (
    <div className="flex flex-row mt-36 w-max">
      <section className="h-screen w-96">
      </section>
        <section className="h-screen w-screen items-center ">
          <form onSubmit={handleSubmit}>
            <label>
              ID:
              <input
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </section>
    </div>
  );
}

export default Login;
