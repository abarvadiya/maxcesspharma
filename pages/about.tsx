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
        <meta property="og:title" content="About - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma is a Pvt. Ltd. company based in Ahmedabad, India"
        />
        <meta property="og:url" content="https://www.maxcesspharma.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      <FullLayout>
        <AboutPage />
      </FullLayout>
    </main>
  );
};

export default About;
