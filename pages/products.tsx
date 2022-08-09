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
          content="Maxcess Pharma LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta property="og:title" content="Products - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.maxcesspharma.com/products"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        <ProductPage />
      </FullLayout>
    </main>
  );
};

export default Product;
