import styles from "./goingupbtn.module.css";

const GoingUpBtn = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling to the top
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={styles.goingUpBtn}
    >
      ↑
    </button>
  );
};

export default GoingUpBtn;
