import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import ManufacturingPage from "../components/ManufacturingPage";

const Manufacturing: NextPage = () => {
  return (
    <main>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Maxcess Pharma Pvt. Ltd. is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta property="og:title" content="About - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma Pvt. Ltd. is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.maxcesspharma.com/about"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        {/* <ProductPage /> */}
        <ManufacturingPage />
      </FullLayout>
    </main>
  );
};

export default Manufacturing;
