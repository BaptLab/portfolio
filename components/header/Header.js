import Link from "next/link";
import Navigation from "../nav/Navigation";
import styles from "./header.module.css";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const navRef = useRef(null); // Reference for the nav element
  const burgerRef = useRef(null); // Reference for the hamburger button

  const switchNav = (event) => {
    event.stopPropagation(); // Prevent click event from bubbling up to document
    setIsNavOpen((prevState) => !prevState); // Toggle the navigation state
  };

  // Close the nav when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If clicking outside of the nav and hamburger, close the nav
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        !burgerRef.current.contains(event.target) // Ignore clicks on the burger button
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
          Baptiste LABAUNE <br></br>Développeur Web
          Freelance
        </h1>
      </Link>
      <button
        className={`${styles.hamburger}`}
        onClick={switchNav}
        ref={burgerRef} // Attach the ref to the button
      >
        <span
          className={`${styles.burgerIcon} ${
            isNavOpen ? styles.open : ""
          }`}
        >
          <span></span>
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
