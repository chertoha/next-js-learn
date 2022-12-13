import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";
import { FC } from "react";
import { socialsType } from "../types";

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.API_HOST}/socials/`);
  const socials = await response.json();

  if (!socials) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      socials,
    },
  };
};

type homePropsType = {
  socials: socialsType[];
};

const Home: FC<homePropsType> = ({ socials }) => {
  console.log(socials);
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home" />
      <ul>
        {socials.map(({ id, icon, path }) => (
          <li key={id}>
            <a href={path} rel="noopener norefferer">
              <span>{icon}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
