import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";

const DEFAULT_OGIMAGE_URL = "";
const DEFAULT_DESCRIPTION = "";

const Header = ({ titlePre = "", ogImageUrl = "", description = "" }) => {
  return (
    <div>
      <Head>
        <title>{titlePre ? `${titlePre} |` : ""} よしたく BLOG</title>
        <meta name="description" content={description || DEFAULT_DESCRIPTION} />
        <meta name="og:title" content={titlePre} />
        <meta property="og:image" content={ogImageUrl || DEFAULT_OGIMAGE_URL} />
        <meta name="twitter:site" content="" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content={ogImageUrl || DEFAULT_OGIMAGE_URL}
        />
        <link rel="shortcut icon" href="../img/favicon.png" />
      </Head>
      <div className="container mx-auto mb-4">
        <div className="flex flex-col max-w-screen-xl p-5 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <a
              href="./"
              className="text-lg font-bold tracking-tighter transition duration-500 ease-in-out transform tracking-relaxed lg:pr-8"
            >
              よしたくブログ
            </a>
          </div>
          {/*<nav>
            <ul className="space-y-2 list-none lg:space-y-0 lg:items-center lg:inline-flex">
              <li>
                <a
                  href="#"
                  className="px-2 lg:px-6 py-6 text-sm border-b-2 border-transparent hover:border-blue-600 leading-[22px] md:px-3 text-gray-500 hover:text-blue-500"
                >
                  {" "}
                  All <span className="hidden lg:inline"> templates </span>
                </a>
              </li>
            </ul>
          </nav>*/}
        </div>
      </div>{" "}
    </div>
  );
};

export default Header;
