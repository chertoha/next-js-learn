import Heading from "../../components/Heading";
import Head from "next/head";
import ContactInfo from "../../components/ContactInfo";
import { BASE_CONTACTS_URL } from "../../utils/urls";

export const getServerSideProps = async (context) => {
  // console.log(context);

  const { id } = context.params;
  const response = await fetch(BASE_CONTACTS_URL + `/${id}`);
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

// export async function getStaticProps(context) {
// const response = await fetch(BASE_CONTACTS_URL + "/1");
// const data = await response.json();
// // const data = null;

// if (!data) {
//   return {
//     notFound: true,
//   };
// }

// return {
//   props: {
//     contact: data,
//   }, // will be passed to the page component as props
// };
// }

const Contact = ({ contact }) => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <ContactInfo contact={contact} />
    </>
  );
};

export default Contact;
