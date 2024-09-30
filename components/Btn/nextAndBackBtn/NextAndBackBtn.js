import styles from "./nextandbackbtn.module.css";

const NextAndBackBtn = (props) => {
  return (
    <div className={styles.btnContainer}>
      {props.direction === "back" && (
        <span className={styles.arrowBack}>[←]</span>
      )}
      <span className={styles.btnText}>{props.btnTxt}</span>
      {props.direction === "next" && (
        <span className={styles.arrowNext}>[→]</span>
      )}
    </div>
  );
};

export default NextAndBackBtn;
