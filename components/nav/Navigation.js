import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className={styles.navBar}>
      <ul className={styles.anchorLinks}>
        <li>
          <a href="#profil">Profil</a>
        </li>
        <li>
          <a href="#technos">Technologies</a>
        </li>
        <li>
          <a href="#projets">Projets</a>
        </li>
        <li>
          <a href="#offres">Offres</a>
        </li>
      </ul>

      <div className={styles.externalLinks}>
        <Link href="/contact">Contact</Link>
        <a
          href="https://github.com/BaptLab"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/logos/github.png"}
            alt="GitHub"
            width={18}
            height={18}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/baptiste-labaune-3950771a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={"/logos/linkedIn.png"}
            alt="LinkedIn"
            width={18}
            height={18}
          />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
