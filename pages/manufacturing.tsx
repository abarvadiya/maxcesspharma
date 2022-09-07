import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import ManufacturingPage from "../components/ManufacturingPage";

const Manufacturing: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Manufacturing</title>
        <meta property="og:title" content="Manufacturing - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma is a Pvt. Ltd. company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.maxcesspharma.com/manufacturing"
        />
        <meta property="og:type" content="website" />
      </Head>
      <FullLayout>
        <ManufacturingPage />
      </FullLayout>
    </main>
  );
};

export default Manufacturing;
