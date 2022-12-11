import Head from "next/head";
import { BASE_POSTS_URL } from "../../utils/urls";

export const getServerSideProps = async (context) => {
  // console.log(context);

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
      contact: data,
    },
  };
};

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Post</title>
      </Head>
    </>
  );
};

export default Contact;
