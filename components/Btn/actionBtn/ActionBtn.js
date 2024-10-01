import { useRouter } from "next/router";
import styles from "./actionBtn.module.css";

const ActionBtn = (props) => {
  const router = useRouter();

  const handleNavigation = (e) => {
    if (props.buttonType !== "submit") {
      e.preventDefault();
    }
    if (props.navTo) {
      router.push(props.navTo);
    } else if (props.onClickFunction) {
      props.onClickFunction(e);
    }
  };

  const alignmentClass =
    props.align === "right"
      ? styles.alignRight
      : props.align === "left"
      ? styles.alignLeft
      : styles.alignCenter;

  return (
    <div
      className={`${styles.btnContainer} ${alignmentClass}`}
    >
      <button
        onClick={handleNavigation}
        className={styles.actionBtn}
        type={props.buttonType || "button"}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default ActionBtn;
