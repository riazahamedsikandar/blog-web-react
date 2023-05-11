import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./../firebaseConfig";
import { signOut } from "firebase/auth";

export default function Navbar() {
  const [user] = useAuthState(auth);
  return (
    <div className="fixed-top border" style={{ backgroundColor: "whitesmoke" }}>
      <nav className="navbar">
        <div>
          <img
            src="safa.png"
            width={50}
            height={50}
            alt="logo"
            className="ms-5"
          />
        </div>
        <Link className="nav-link" to="/">
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
                onClick={() => {
                  signOut(auth);
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(to right top, #051937, #00507c, #008e98, #00c97d, #bef93a)",
                  fontSize: "1rem"
                }}
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
