import {
  Navbar,
  Nav,
  Button,
  Card,
  Container,
  Modal,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

import CartModal from "../shop/CartModal";

const TopNavbar = (props) => {
  const [showCart, setShowCart] = useState(false);
  const [count, setCount] = useState();
  const [total, setTotal] = useState();
  const { cartCount, formattedTotalPrice, clearCart } = useShoppingCart();

  useEffect(() => {
    setCount(cartCount);
    setTotal(formattedTotalPrice);
  });

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      className="fixed-top card-shadow"
    >
      <Container>
        <Navbar.Brand href="#home">Dev-Apparel</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/">
              <Nav.Link href="/">Home</Nav.Link>
            </Link>

            <Link href="/shop">
              <Nav.Link href="/shop">Shop</Nav.Link>
            </Link>
          </Nav>
          <Nav>
            <div className="row ml-0">
              <div
                className="cart-icon mt-2"
                onClick={() => setShowCart(!showCart)}
              >
                <span className="cart-icon-counter">{count}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="25"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <div
                className="ml-3 text-muted"
                style={{ cursor: "pointer" }}
                onClick={() => setShowCart(!showCart)}
              >
                My Cart
                <br />
                <div className="lead mb-2">
                  {total}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <a href="#">
                <div
                  className="login-icon mt-2 ml-1 text-dark"
                  style={{ width: "30px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </a>
              <a href="#">
                <div
                  className="ml-3 text-muted text-dark"
                  style={{ cursor: "pointer" }}
                >
                  Sign In
                  <br />
                  <div className="lead mb-2">My Account</div>
                </div>
              </a>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <CartModal showCart={showCart} setShowCart={setShowCart} />
    </Navbar>
  );
};

export default TopNavbar;
