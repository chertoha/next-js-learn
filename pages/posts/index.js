import Heading from "../../components/Heading";
import Head from "next/head";
import { BASE_POSTS_URL } from "../../utils/urls";

export const getStaticProps = async (context) => {
  const response = await fetch(BASE_POSTS_URL);
  const posts = await response.json();

  if (!posts) {
    return {};
  }

  return {
    props: {
      posts,
    },
  };
};

const Posts = () => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text="Posts" />
      <p>lorem sfsdfsdf sdfs sd sdfsdfdf</p>
    </>
  );
};

export default Posts;
