// Next
import type { NextPage } from "next";
import Head from "next/head";

// Components
import FullLayout from "../components/FullLayout";
import HomePage from "../components/HomePage";
import ImageSlider from "../components/HomePage/components/ImageSlider";

const Home: NextPage = () => {
  return (
    <main>
      <Head>
        <meta property="og:title" content="Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma is a Pvt. Ltd. company based in Ahmedabad, India"
        />
        <meta property="og:url" content="https://www.maxcesspharma.com" />
        <meta property="og:type" content="website" />
        <title>Maxcess Pharma</title>
      </Head>
      <ImageSlider />
      <FullLayout>
        <HomePage />
      </FullLayout>
    </main>
  );
};

export default Home;
