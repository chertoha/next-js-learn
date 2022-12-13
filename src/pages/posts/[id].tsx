import Head from "next/head";
import { BASE_POSTS_URL } from "../../utils/urls";
import { GetStaticPaths, GetStaticProps } from "next";
import { FC } from "react";
import { postType } from "../../types";


export const getStaticPaths: GetStaticPaths = async() => {
  const response = await fetch(BASE_POSTS_URL);
  const posts = await response.json();

  const paths = posts.map(({ id }) => ({
    params: { id: id.toString() },
  }));

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}

// `getStaticPaths` requires using `getStaticProps`
export const  getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params;
  const response = await fetch(BASE_POSTS_URL + `/${id}`);
  const data = await response.json();
  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post: data,
    },
  };
}


type postPropsType = {
  post: postType,
}



const Post : FC<postPropsType> = ({ post }) => {
  const { title, body } = post || {};
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
      <div>
        <strong>Title: </strong>
        <p> {title}</p>
      </div>
      <div>
        <strong>Post: </strong> <p>{body}</p>
      </div>
    </>
  );
};

export default Post;
