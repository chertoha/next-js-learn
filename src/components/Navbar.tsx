import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";
import logoImage from "../../public/logo.png";

const links = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Posts", path: "/posts" },
  { id: "3", title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div>
        <Image src={logoImage} width="60" height="60" alt="logo"></Image>
      </div>
      <div className={styles.links}>
        {links.map(({ id, title, path }) => (
          <Link
            key={id}
            href={path}
            className={pathname === path ? styles.active : styles.link}
          >
            {title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
