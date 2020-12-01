import {
  Container,
  Row,
  Button,
  Carousel,
  CarouselItem,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap";
import Image from "next/image";
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

import Filter from "./Filter";

const ShopGridList = ({ category }) => {
  const { addItem, cartDetails } = useShoppingCart();
  const [products, setProducts] = useState([]);

  const [tech, setTech] = useState("");
  const [type, setType] = useState("");

  const radioRef = useRef();
  useEffect(() => {
    const getProducts = async (category) => {
      if (!category) {
        const { data } = await axios.get("/api/products/");

        setProducts(data.Items);
      } else {
        const { data } = await axios.get(`/api/products/category/${category}`);

        setProducts(data.Items);
      }
    };

    getProducts(category);
  }, []);

  let result;
  if (type && tech) {
    result = products.filter((i) => {
      return (
        i.tech.toLowerCase() == tech.toLowerCase() &&
        i.type.toLowerCase() == type.toLowerCase()
      );
    });
  } else if (tech) {
    result = products.filter((i) => {
      return i.tech.toLowerCase() == tech.toLowerCase();
    });
  } else if (type) {
    result = products.filter((i) => {
      return i.type.toLowerCase() == type.toLowerCase();
    });
  } else {
    result = products;
  }

  const cartProducts = [];
  const renderList = result.map((product, index) => {
    cartProducts.push({
      name: product.title,
      description: product.description,
      sku: product._id,
      price: product.pprice,
      currency: "USD",
      image: product.images[0],
    });
    return (
      <div
        className="shop-card-pos col-md-3 p-3 mt-3 mb-3 shadow-md rounded-lg show relative"
        key={product._id}
      >
        <Carousel className="bg-light" interval={null}>
          {product.images.map((image) => {
            return (
              <CarouselItem key={image}>
                <Image
                  src={image || "/not-found.png"}
                  alt={product.title}
                  width={500}
                  height={500}
                />
              </CarouselItem>
            );
          })}
        </Carousel>
        <div className="rounded">
          <p style={{ marginBottom: 0 }} className="text-muted">
            <small>
              <b>{product.category}</b>
            </small>
          </p>
          <p style={{ marginBottom: 0 }} className="item lead text-truncate">
            {product.title}
          </p>
          <p className="price lead" style={{ color: "#cc5353" }}>
            <strong>${product.pprice}</strong>
          </p>
        </div>
        <div id="" className="hide text-center">
          <ToggleButtonGroup
            type="radio"
            name="options"
            defaultValue="M"
            className="mb-2"
          >
            <ToggleButton
              onChange={(e) => (radioRef.current = e.target.value)}
              inputRef={radioRef}
              value="S"
              variant="info"
              className="btn-size text-white"
            >
              S
            </ToggleButton>
            <ToggleButton
              onChange={(e) => (radioRef.current = e.target.value)}
              inputRef={radioRef}
              value="M"
              variant="info"
              className="btn-size text-white"
            >
              M
            </ToggleButton>
            <ToggleButton
              onChange={(e) => (radioRef.current = e.target.value)}
              inputRef={radioRef}
              value="L"
              variant="info"
              className="btn-size text-white"
            >
              L
            </ToggleButton>
          </ToggleButtonGroup>
          <br />
          <div className="btn-group">
            <Button
              className="btn btn-dark btn-custom mb-2"
              onClick={(e) => {
                e.preventDefault();
                addItem({
                  name: product.title,
                  description: product.description,
                  sku: product._id,
                  price: product.price,
                  currency: "USD",
                  image: product.images[0],
                });
              }}
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
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <Container>
        <Filter type={type} tech={tech} setType={setType} setTech={setTech} />
        <Row>{renderList}</Row>
      </Container>
    </div>
  );
};

export default ShopGridList;
