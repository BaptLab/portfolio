import styles from "./navigation.module.css";
import Image from "next/image";
import Link from "next/link";

const Navigation = ({
  isNavOpen,
  setIsNavOpen,
  navRef,
}) => {
  const handleNavLinkClick = () => {
    setIsNavOpen(false); // Close the nav when a link is clicked
  };

  return (
    <nav
      ref={navRef} // Attach the navRef to detect clicks outside
      className={`${styles.navBar} ${
        isNavOpen ? styles.open : ""
      }`}
    >
      <ul className={styles.anchorLinks}>
        <li>
          <Link
            href="/#profil"
            onClick={handleNavLinkClick}
          >
            Qui suis-je ?
          </Link>
        </li>
        <li>
          <Link
            href="/#technos"
            onClick={handleNavLinkClick}
          >
            compétences
          </Link>
        </li>
        <li>
          <Link
            href="/#projets"
            onClick={handleNavLinkClick}
          >
            Projets
          </Link>
        </li>
        <li>
          <Link
            href="/#offres"
            onClick={handleNavLinkClick}
          >
            Offres
          </Link>
        </li>
      </ul>

      <div className={styles.externalLinks}>
        <Link href="/contact" onClick={handleNavLinkClick}>
          Contact
        </Link>
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
