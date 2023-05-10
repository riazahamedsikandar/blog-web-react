import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top border" style={{ backgroundColor: "#DDBEA9" }}>
      <nav className="navbar">
        <div>
          <img
            src="safa.png"
            width={30}
            height={30}
            alt="logo"
            className="ms-5"
          />
        </div>
        <Link className="nav-link" to="/" style={{ fontSize: "1.5rem", fontFamily: "Roboto"}}>
          Home{" "}
        </Link>
        <div>
          {user && (
            <>
              <span className="pe-4" style={{ fontSize: "1.5rem" }}>
                Signed is as {user.displayName || user.email}
              </span>
              <button 
              className="btn btn-primary btn-sm me-3" 
              onClick={()=>{signOut(auth)}}
              style={{ background: 'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)', color: '#fff' }}
            >
             Logout
            </button>
          </>
          )}
        </div>
      </nav>
    </div>
  );
}
