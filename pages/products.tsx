import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import ProductPage from "../components/ProductPage";

const Product: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Products</title>
        <meta
          name="description"
          content="Kahu life science LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta property="og:title" content="Products - Kahulife science" />
        <meta
          property="og:description"
          content="Kahu life science LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.kahulifescience.com/products"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        <br />
        <br />
        <br />
        <br />
        <ProductPage />
      </FullLayout>
    </main>
  );
};

export default Product;
