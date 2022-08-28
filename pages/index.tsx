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
        <meta
          name="google-site-verification"
          content="B-I6F18gDigwegKX-aXiZmKSJr5b_AjVSyE2Xub-Tsw"
        />

        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="googlebot" content="noindex" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="robots" content="max-image-preview:large" />

        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Ahmedabad" />
        <meta name="geo.position" content="23.021624;72.579707" />
        <meta name="ICBM" content="23.021624, 72.579707" />

        <meta
          name="description"
          content="Maxcess Pharma Pvt. Ltd. is a limited liability partnership limited company based in Ahmedabad, India and was incorporated on 31/12/2019."
        />
        <meta property="og:title" content="Maxcess Pharma" />
        <meta
          property="og:description"
          content="Maxcess Pharma Pvt. Ltd. is a limited liability partnership limited company based in Ahmedabad, India and was incorporated on 31/12/2019."
        />
        <meta property="og:url" content="https://www.maxcesspharma.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
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
