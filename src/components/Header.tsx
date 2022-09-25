import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const DEFAULT_OGIMAGE_URL = "";
const DEFAULT_DESCRIPTION = "";

const Header = ({ titlePre = "", ogImageUrl = "", description = "" }) => {
  return (
    <Head>
      <title>{titlePre ? `${titlePre} |` : ""} よしたく BLOG</title>
      <meta name="description" content={description || DEFAULT_DESCRIPTION} />
      <meta name="og:title" content={titlePre} />
      <meta property="og:image" content={ogImageUrl || DEFAULT_OGIMAGE_URL} />
      <meta name="twitter:site" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={ogImageUrl || DEFAULT_OGIMAGE_URL} />
      <link rel="shortcut icon" href="../img/favicon.png" />
    </Head>
  );
};

export default Header;
