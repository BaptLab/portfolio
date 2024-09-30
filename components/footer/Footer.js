import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        href="/legals"
        className={styles.footerRedirect}
      >
        Mentions Légales
      </Link>
    </footer>
  );
};

export default Footer;
