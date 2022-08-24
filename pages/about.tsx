import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import AboutPage from "../components/AboutPage";

const About: NextPage = () => {
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
        <AboutPage />
      </FullLayout>
    </main>
  );
};

export default About;
