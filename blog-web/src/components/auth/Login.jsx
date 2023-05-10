import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="border p-3 bg-light" style={{ marginTop: 70 }}>
      <h1 style={{ color: "black" }}>Login</h1>
      <div className="form-group">
        <label style={{ color: "black" }}>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label style={{ color: "black" }}>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className="btn btn-primary"
        style={{
          marginTop: 10,
          backgroundImage:
            "linear-gradient(to right top, #1a344e, #19384d, #1c3c4b, #223f49, #2a4247, #2e474a, #334b4e, #385051, #3a5859, #3c6160, #3d6968, #3f726f)",
          color: "white",
          transition: "background-image 0.5s ease-in-out",
        }}
        onClick={handleLogin}
        onMouseOver={(e) => {
          e.target.style.backgroundImage =
            "linear-gradient(to right top, #158786, #0f7b7c, #097072, #056568, #025a5e, #016064, #01666a, #006c70, #008587, #009f9e, #00bab4, #02d6ca)";
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundImage =
            "linear-gradient(to right top, #1a344e, #19384d, #1c3c4b, #223f49, #2a4247, #2e474a, #334b4e, #385051, #3a5859, #3c6160, #3d6968, #3f726f)";
        }}
      >
        Login
      </button>
    </div>
  );
}
