import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import GlobalPresencePage from "../components/GlobalPresencePage";

const Contact: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Global Presence</title>
        <meta property="og:title" content="Global Presence - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma is a Pvt. Ltd. company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.maxcesspharma.com/global-presence"
        />
        <meta property="og:type" content="website" />
      </Head>
      <FullLayout>
        <GlobalPresencePage />
      </FullLayout>
    </main>
  );
};

export default Contact;
