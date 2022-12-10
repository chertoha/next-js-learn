import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.css";

const links = [
  { id: "1", title: "Home", path: "/" },
  { id: "2", title: "Posts", path: "/posts" },
  { id: "3", title: "Contacts", path: "/contacts" },
];

const Navbar = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <div>Logo</div>
      <ul>
        {links.map(({ id, title, path }) => (
          <li key={id}>
            <Link
              href={path}
              className={pathname === path ? styles.active : styles.link}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
