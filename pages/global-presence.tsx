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
        <meta
          name="description"
          content="Kahu life science LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta
          property="og:title"
          content="Global Presence - Kahulife science"
        />
        <meta
          property="og:description"
          content="Kahu life science LLP is a limited liability partnership limited company based in Ahmedabad, India"
        />
        <meta
          property="og:url"
          content="https://www.kahulifescience.com/global-presence"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        <GlobalPresencePage />
      </FullLayout>
    </main>
  );
};

export default Contact;
