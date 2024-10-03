import Link from "next/link";
import Navigation from "../nav/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <Link href={"/"} className={styles.logoContainer}>
        <h1 className={styles.logo}>
          Baptiste LABAUNE - Développeur Web en Freelance
        </h1>
      </Link>
      <Navigation />
    </header>
  );
};

export default Header;
