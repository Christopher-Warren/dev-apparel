import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import axios from "axios";

import { getProducts } from "../../pages/api/products/";
import { Card, Alert, Form, Col, Button } from "react-bootstrap";
import { useShoppingCart } from "use-shopping-cart";

export async function getStaticPaths() {
  // Gets all producs ids, and statically generates
  // the pages endpoints for each id

  const products = await getProducts();

  const paths = products.map((product) => {
    return {
      params: {
        // The id needs to be wrapped to ensure
        // that the object is JSON.
        productid: `${product._id}`,
      },
    };
  });

  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
  // The data that is sent to the front end
  // NOTE: Mongoose does not return data as pure JSON
  // thus the _id was removed and .lean() was called.
  const product = await getProducts(params.productid);

  return {
    props: {
      product,
    },
  };
}

const product = ({ product }) => {
  const { addItem } = useShoppingCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="single-product-navbar">
        <div className="container text-white pt-4">
          <h3>
            <strong>{product.name}</strong>
          </h3>
        </div>
      </div>
      <div className="container single-product-container">
        <div className="single-product-card row">
          <div className="">
            <Image src={product.image} height="640" width="640" />
          </div>
          <div className="col-lg">
            <h2 className="card-text-price leading">${product.pprice}</h2>
            <div className="lead">
              <strong>Featured Tech: </strong>
              {product.tech.charAt(0).toUpperCase() + product.tech.slice(1)}
            </div>
            <div className="lead">
              <strong>Description: </strong>
              {product.description}
            </div>
            <Form>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>Size:</Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    size="lg"
                  >
                    <option>Select size</option>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row className="align-items-center">
                <Col xs={3} lg={2} className="my-1">
                  <Form.Label
                    className="mr-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    srOnly
                  >
                    Preference
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="inlineFormCustomSelect"
                    custom
                    size="lg"
                    onChange={(e) => {
                      setQuantity(parseInt(e.target.value));
                    }}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </Form.Control>
                </Col>
                <Col xs={9} lg={10}>
                  <Button
                    className="btn-dark btn-custom"
                    block={true}
                    size="lg"
                    onClick={(e) => {
                      console.log(quantity);
                      e.preventDefault();
                      addItem(
                        {
                          name: product.title,
                          description: product.description,
                          sku: product._id,
                          price: product.price,
                          currency: "USD",
                          image: product.images[0],
                        },
                        quantity
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="icon mb-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>{" "}
                    Add to Cart
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default product;
/*
<Image src={product.image} height="500" width="500" />
          <h1>{product.title}</h1>
          <h3>{product.description}</h3>
          <h5>{product.pprice}</h5>
*/
