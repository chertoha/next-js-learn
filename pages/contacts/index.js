import Head from "next/head";
import Heading from "../../components/Heading";
// import { useEffect, useState } from "react";
import { BASE_CONTACTS_URL } from "../../utils/urls";
import { useRouter } from "next/router";
import Link from "next/link";

export async function getStaticProps(context) {
  const response = await fetch(BASE_CONTACTS_URL);
  const data = await response.json();
  // const data = null;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      contacts: data,
    }, // will be passed to the page component as props
  };
}

const Contacts = ({ contacts }) => {
  // const router = useRouter();
  // console.log(router);

  // const [contacts, setContacts] = useState([]);

  // useEffect(() => {
  //   const fetchContacts = async () => {
  //     const response = await fetch(BASE_CONTACTS_URL);
  //     const data = await response.json();
  //     setContacts(data);
  //   };
  //   fetchContacts();
  // }, []);

  return (
    <>
      <Head>
        <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:" />

      <ul>
        {contacts.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/contacts/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
