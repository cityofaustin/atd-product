import React from "react";
import Head from "next/head";

const CustomHead = () => {
  return (
    <Head>
      <meta
        name="author"
        content="Austin Transportation Data & Technology Services"
      />
      <meta
        name="description"
        content="We build and buy technology to help city staff tackle Austin's mobility challenges. We're obsessed with efficiencies, open data, and delivering human-centered tech to government services."
      />
      {/* <!-- Google / Search Engine Tags --> */}
      <meta
        itemProp="name"
        content="Austin Transportation Data & Technology Services"
      />
      <meta
        itemProp="description"
        content="We build and buy technology to help city staff tackle Austin's mobility challenges. We're obsessed with efficiencies, open data, and delivering human-centered tech to government services."
      />
      <meta
        itemProp="image"
        content="http://austinmobility.io/atd_product.jpg"
      />
      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://austinmobility.io" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="Austin Transportation Data & Technology Services"
      />
      <meta
        property="og:description"
        content="We build and buy technology to help city staff tackle Austin's mobility challenges. We're obsessed with efficiencies, open data, and delivering human-centered tech to government services."
      />
      <meta
        property="og:image"
        content="http://austinmobility.io/atd_product.jpg"
      />
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Austin Transportation Data & Technology Services"
      />
      <meta
        name="twitter:description"
        content="We build and buy technology to help city staff tackle Austin's mobility challenges. We're obsessed with efficiencies, open data, and delivering human-centered tech to government services."
      />
      <meta
        name="twitter:image"
        content="http://austinmobility.io/atd_product.jpg"
      />
      <meta name="twitter:creator" content="@austinmobility" />

      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <title>Austin Transportation Data & Technology Services</title>
    </Head>
  );
};

export default CustomHead;
