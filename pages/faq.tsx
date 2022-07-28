import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import FAQPage from "../components/FAQPage";

const Product: NextPage = () => {
  return (
    <main>
      <Head>
        <title>FAQ</title>
        <meta
          name="description"
          content="Maxcess Pharma LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta property="og:title" content="FAQ - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta property="og:url" content="https://www.maxcesspharma.com/faq" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        <FAQPage />
      </FullLayout>
    </main>
  );
};

export default Product;
