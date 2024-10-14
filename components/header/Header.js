import Link from "next/link";
import Navigation from "../nav/Navigation";
import styles from "./header.module.css";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null); // Reference for the nav element

  const switchNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Close the nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target)
      ) {
        setIsNavOpen(false);
      }
    };
    if (isNavOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    } else {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    }
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isNavOpen]);

  return (
    <header className={styles.headerContainer}>
      <Link href={"/"} className={styles.logoContainer}>
        <h1 className={styles.logo}>
          Baptiste LABAUNE - Développeur Web en Freelance
        </h1>
      </Link>
      <button
        className={`${styles.hamburger} ${
          isNavOpen ? styles.open : ""
        }`}
        onClick={switchNav}
      >
        <span className={styles.burgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <Navigation
        isNavOpen={isNavOpen}
        setIsNavOpen={setIsNavOpen}
        navRef={navRef}
      />
    </header>
  );
};

export default Header;
