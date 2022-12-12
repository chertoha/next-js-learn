import Heading from "../../components/Heading";
import Head from "next/head";
import { BASE_POSTS_URL } from "../../utils/urls";
import Link from "next/link";

export const getStaticProps = async () => {
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

const Posts = ({ posts }) => {
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
