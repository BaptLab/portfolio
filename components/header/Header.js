import Navigation from "../nav/Navigation";
import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <h1 className={styles.logo}>
          Baptiste LABAUNE - Web Developer - Freelance
        </h1>
      </div>
      <Navigation />
    </header>
  );
};

export default Header;
