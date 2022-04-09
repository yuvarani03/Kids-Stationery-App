import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { userLogout } from "../steps/step3";
export default function Nav() {
  const cartstate = useSelector((state) => state.cartReducer)
  const userstate = useSelector((state) => state.userLoginReducer)
  const { currentUser } = userstate;
  const isAdmin = currentUser?.isAdmin;
  const dispatch = useDispatch();
  return (
    <div>
      <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-3 bg-white rounded" id="mainnav">
        <a className="navbar-brand" href="/">
          KIDS STATIONERY SHOPPY
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"><i style={{ color: "black" }} className="fas fa-bars" /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {currentUser ? (
              <div className="dropdown mt-3">
                <a style={{ color: 'black', textDecoration: 'none' }} className="dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {currentUser.fname}{currentUser.lname}
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  {isAdmin ? (
                    <li className="nav-item">
                      <a className="dropdown-item" href="/admin">
                        Dashboard
                      </a>
                    </li>
                  ) : null}
                  <a className="dropdown-item" href="/orders">Orders</a>
                  <a className="dropdown-item" href="#" onClick={() => { dispatch(userLogout()) }}><li>Logout</li></a>
                </div>
              </div>
            ) : (<li className="nav-item mt-2">
              <a className="nav-link" href="/login">Login</a>
            </li>)}

            <li className="nav-item mt-2">
              <a className="nav-link" href="/cart">
                <i className="fa-solid fa-cart-shopping"></i> {cartstate.cartData.length}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
