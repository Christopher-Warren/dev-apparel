import { useEffect } from "react";
import Head from "next/head";
import axios from "axios";

import { getProducts } from "../../pages/api/products/";

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
  return (
    <div>
      <img src={product.image} />
      <h1>{product.title}</h1>
      <h3>{product.description}</h3>

      <h5>{product.pprice}</h5>
    </div>
  );
};

export default product;
