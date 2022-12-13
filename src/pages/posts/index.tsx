import Heading from "../../components/Heading";
import Head from "next/head";
import { BASE_POSTS_URL } from "../../utils/urls";
import Link from "next/link";
import { GetStaticProps } from "next";
import { FC } from "react";
import { postType } from "../../types";

export const getStaticProps : GetStaticProps = async () => {
  const response = await fetch(BASE_POSTS_URL);
  const posts = await response.json();

  if (!posts) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: posts,
    },
  };
};


type postsPropsType = {
  posts: postType[];
}


const Posts: FC<postsPropsType> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts:</title>
      </Head>
      <Heading text="Posts" />
      <ul>
        {posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
