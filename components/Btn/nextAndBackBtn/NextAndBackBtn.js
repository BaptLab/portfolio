import styles from "./nextandbackbtn.module.css";

const NextAndBackBtn = (props) => {
  return (
    <>
      {props.direction === "back" && (
        <div
          className={`${styles.btnContainer} ${styles.back}`}
        >
          <span className={styles.arrowBack}>
            [←] {props.btnTxt}
          </span>
        </div>
      )}
      {props.direction === "next" && (
        <div
          className={`${styles.btnContainer} ${styles.next}`}
        >
          <span className={styles.arrowNext}>
            {props.btnTxt} [→]
          </span>
        </div>
      )}
    </>
  );
};

export default NextAndBackBtn;
