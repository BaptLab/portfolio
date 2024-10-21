import { useRouter } from "next/router"; // Import useRouter for navigation
import styles from "./nextandbackbtn.module.css";

const NextAndBackBtn = ({
  btnTxt,
  direction,
  totalProjects,
}) => {
  const router = useRouter();
  const currentId = parseInt(router.query.projectId); // Get the current project ID from the URL

  const handleNavigation = (direction) => {
    let nextId;

    if (direction === "next") {
      nextId = currentId + 1; // Move to the next project
    } else if (direction === "back") {
      nextId = currentId > 1 ? currentId - 1 : currentId; // Move to the previous project, but don't go below ID 1
    }

    // Navigate to the next or previous project based on the new ID
    router.push(`/projects/0${nextId}`);
  };

  // Conditions to hide or show buttons
  const isFirstProject = currentId === 1;
  const isLastProject = currentId === totalProjects;
  const isSingleProject = totalProjects === 1;

  return (
    <>
      {!isSingleProject &&
        direction === "back" &&
        !isFirstProject && (
          <div
            className={`${styles.btnContainer} ${styles.back}`}
            data-text={`[←] ${btnTxt}`} /* New text on hover */
            onClick={() => handleNavigation("back")} // Handle back navigation on click
          >
            <span className={styles.arrowBack}>
              [←] {btnTxt}
            </span>
          </div>
        )}

      {!isSingleProject &&
        direction === "next" &&
        !isLastProject && (
          <div
            className={`${styles.btnContainer} ${styles.next}`}
            data-text={`${btnTxt} [→]`} /* New text on hover */
            onClick={() => handleNavigation("next")} // Handle next navigation on click
          >
            <span className={styles.arrowNext}>
              {btnTxt} [→]
            </span>
          </div>
        )}
    </>
  );
};

export default NextAndBackBtn;
