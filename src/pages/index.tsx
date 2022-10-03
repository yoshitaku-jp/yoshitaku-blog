import type { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getAllPosts } from "../lib/api";
import Header from "../components/Header";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "title", "date", "tags"]);
  return {
    props: { allPosts },
  };
};

const Home: NextPage<Props> = ({ allPosts }) => {
  return (
    <>
      <div className="max-w-2xl mx-auto mb-16">
        <Header titlePre={`TOP`} ogImageUrl="" />

        <ul>
          {allPosts.map((post) => (
            <a href={post.slug} key={post.slug}>
              <h2>{post.title}</h2>
              <p>{post.date}</p>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
