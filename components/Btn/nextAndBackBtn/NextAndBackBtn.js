import { useRouter } from "next/router"; // Import useRouter for navigation
import styles from "./nextandbackbtn.module.css";

const NextAndBackBtn = (props) => {
  const router = useRouter();

  const handleNavigation = (direction) => {
    const currentId = parseInt(router.query.projectId); // Get the current project ID from the URL
    let nextId;

    if (direction === "next") {
      nextId = currentId + 1; // Move to the next project
    } else if (direction === "back") {
      nextId = currentId > 1 ? currentId - 1 : currentId; // Move to the previous project, but don't go below ID 1
    }

    // Navigate to the next or previous project based on the new ID
    router.push(`/projects/${nextId}`);
  };

  return (
    <>
      {props.direction === "back" && (
        <div
          className={`${styles.btnContainer} ${styles.back}`}
          data-text={`New ${props.btnTxt}`} /* New text on hover */
          onClick={() => handleNavigation("back")} // Handle back navigation on click
        >
          <span className={styles.arrowBack}>
            [←] {props.btnTxt}
          </span>
        </div>
      )}
      {props.direction === "next" && (
        <div
          className={`${styles.btnContainer} ${styles.next}`}
          data-text={`${props.btnTxt} [→]`} /* New text on hover */
          onClick={() => handleNavigation("next")} // Handle next navigation on click
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
