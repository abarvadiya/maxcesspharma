import React from "react";
import Head from "next/head";
// Components
import { NextPage } from "next";
import FullLayout from "../components/FullLayout";
import ContactPage from "../components/ContactPage";

const Contact: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Contact Us</title>
        <meta property="og:title" content="Contact - Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma is a Pvt. Ltd. company based in Ahmedabad, India"
        />
        <meta property="og:url" content="https://www.maxcesspharma.com/about" />
        <meta property="og:type" content="website" />
      </Head>
      <FullLayout>
        <ContactPage />
      </FullLayout>
    </main>
  );
};

export default Contact;
