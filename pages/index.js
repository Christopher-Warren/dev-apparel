import Head from "next/head";
import Hero from "../components/layout/Hero";
import { Container, Row, Card, Button } from "react-bootstrap";
import Image from "next/image";
import CategoryCard from "../components/layout/CategoryCard";
import ShopGridList from "../components/shop/ShopGridList";

// <img src="/categories/lifestylemens.jpg" className='img-fluid'/>

export default function Home() {
  return (
    <main>
      <Head>
        <title>Dev-Apparel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Hero />
      <CategoryCard />
      <div className="container">
        <h2 className="h3 text-center mt-5">
          <strong>Recently Added Products</strong>
        </h2>
        <ShopGridList />
      </div>
    </main>
  );
}
