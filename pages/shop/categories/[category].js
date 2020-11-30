import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import Head from "next/head";

import ShopGridList from "../../../components/shop/ShopGridList";
import Filter from "../../../components/shop/Filter";

const Category = () => {
  const router = useRouter();
  const { category } = router.query;

  const renderPage = () => {
    switch (category) {
      case "mens":
        return <ShopGridList category={category} />;
      case "womens":
        return <ShopGridList category={category} />;
      case "accessory":
        return <ShopGridList category={category} />;
      default:
        break;
    }
  };

  return (
    <main>
      <Head>
        <title>Dev-Apparel | Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <Filter></Filter>
        <h1>{category}</h1>
        {renderPage()}
      </Container>
    </main>
  );
};

export default Category;
