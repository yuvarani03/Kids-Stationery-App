import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../steps/step2";
export default function Stationery({ stationery }) {
  const [quantity, setquantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch()
  function addtocart(){
    dispatch(addToCart(stationery, quantity))
  }
  return (
    <div
      style={{ margin: "50px"}}
      className="shadow-lg p-3 mb-5 bg-white rounded" key = {stationery._id}
    >
      <div onClick={handleShow}>
        <h1>{stationery.name}</h1>
        <img
          src={stationery.image}
          className="img-fluid"
          style={{ height: "200px", width: "250px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Price:</p>
          <h1>Rs.{stationery.price * quantity}/-</h1>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            className="form-control"
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(5).keys()].map((x, i) => {
              return <option value={i + 1}> {i + 1} </option>;
            })}
          </select>
        </div>
      </div>
      <div className="m-1 w-100">
        <button className="btn" onClick={addtocart}>ADD TO CART</button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{stationery.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={stationery.image}
            className="img-fluid"
            style={{ height: "350px" }}
          ></img>
          <p className="text-primary">{stationery.description}</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}
