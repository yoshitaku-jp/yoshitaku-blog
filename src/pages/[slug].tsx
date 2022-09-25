import {
  Heading,
  ListItem,
  Text,
  ToDo,
  Toggle,
} from "../components/ContentBlocks";

import { NextPage, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import ErrorPage from "next/error";
import styles from "../styles/Home.module.css";
import { getAllPosts, getPostBySlug } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import HeadingTitle from "../components/HeadingTitle";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const post = getPostBySlug(params.slug, ["slug", "title", "date", "content"]);
  const content = await markdownToHtml(post.content);
  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

const Post: NextPage<Props> = ({ post }) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article>
          <div className="mb-2">
            <div className="mb-4">
              <HeadingTitle>{post.title}</HeadingTitle>
            </div>
          </div>
          <div className={styles.grid}>
            <p className={"opacity-90 font-bold"}>
              <span className="posted mr-2">
                <span className="fs12 mr-2">📆</span>
                {post.date}
              </span>
            </p>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>
    </div>
  );
};

export default Post;
