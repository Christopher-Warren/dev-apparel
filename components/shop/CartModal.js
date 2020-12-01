import {
  Button,
  Card,
  Container,
  Modal,
  Row,
  Col,
  Image,
} from "react-bootstrap";

import axios from "axios";

import { useShoppingCart } from "use-shopping-cart";
import { useState, useEffect } from "react";

const CartModal = ({ showCart, setShowCart }) => {
  const {
    formattedTotalPrice,
    redirectToCheckout,
    cartCount,
    addItem,
    cartDetails,
    removeItem,
    clearCart,
  } = useShoppingCart();

  const handleCheckout = async () => {
    const { data } = await axios.post(
      "api/checkout_sessions/checkout",
      cartDetails
    );
    redirectToCheckout({ sessionId: data.id });
  };

  const getCart = () => {
    return Object.entries(cartDetails).map((product) => {
      const item = product[1];

      return (
        <div className="modal-card " key={item.sku}>
          <Row className="my-auto align-items-center">
            <Col xs={6} md={4}>
              <Image src={item.image} thumbnail />
            </Col>
            <Col>
              <div>
                <h5 className="card-text-name" style={{ marginBottom: "0" }}>
                  <strong>{item.name}</strong>
                </h5>
                <div className="card-text-price lead">
                  <strong>{item.formattedValue}</strong>
                  <span className="text-dark"> x{item.quantity}</span>
                </div>
              </div>
            </Col>
          </Row>
          <div
            className="mt-3 rounded-lg btn-light btn card-button"
            onClick={() => {
              removeItem(item.sku);
            }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            Remove
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <Modal
        show={showCart}
        backdrop={false}
        onHide={() => setShowCart(false)}
        aria-labelledby="example-custom-modal-styling-title"
        className="right"
        contentClassName="card-shadow bg-light"
      >
        <Modal.Header
          closeButton
          style={{ paddingBottom: "0", marginBottom: "0" }}
          className="text-dark"
        >
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="w-100 text-center"
          >
            <h3 className="leading text-dark">Your Cart {cartCount}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Container>{getCart()}</Container>
        </Modal.Body>
        <Modal.Footer>
          <div className="w-100">
            <h4 className="leading text-dark">Total:{formattedTotalPrice}</h4>{" "}
            <Row className="w-100 justify-content-around">
              <Button
                className="d-inline btn btn-dark btn-custom mb-2"
                onClick={handleCheckout}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Checkout
              </Button>
              <Button
                className="d-inline btn btn-custom mb-2"
                onClick={clearCart}
              >
                <svg
                  className="d-inline"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Clear Cart
              </Button>
            </Row>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CartModal;
