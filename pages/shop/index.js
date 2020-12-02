import Head from "next/head";
import ShopGridList from "../../components/shop/ShopGridList";

const Store = () => {
  return (
    <main>
      <Head>
        <title>Dev-Apparel | Shop</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="display-4 text-center">Shop</h1>
      <ShopGridList />
    </main>
  );
};

export default Store;
