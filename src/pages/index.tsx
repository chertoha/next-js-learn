import Head from "next/head";
import Heading from "../components/Heading";
import styles from "../styles/Home.module.scss";
import { FC } from "react";
import { socialsType } from "../types";
// import { server } from "../Config";

export const getStaticProps = async () => {
  // const response = await fetch(`${process.env.API_HOST}/socials`);
  // const response = await fetch(`http://localhost:3000/api/socials`);
  //  const response = await fetch(`${server}/api/socials`);
  try {
    const response = await fetch(`${process.env.API_HOST}/socials`);
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
  } catch (error) {
    return {
      props: {
        socials: null,
      },
    };
  }
};

type homePropsType = {
  socials: socialsType[];
};

const Home: FC<homePropsType> = ({ socials }) => {
  // console.log(socials);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Home</title>
      </Head>
      <Heading text="Home" />
      {socials && (
        <ul>
          {socials.map(({ id, icon, path }) => (
            <li key={id}>
              <a href={path} rel="noopener norefferer">
                <span>{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
