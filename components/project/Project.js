import styles from "./project.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

const Project = (props) => {
  const router = useRouter();

  // Function to handle navigation to the dynamic project page
  const navigateToProject = (e) => {
    e.preventDefault();
    router.push(`/projects/${props.projectId}`);
  };

  return (
    <div className={styles.projectContainer}>
      <Image
        src={props.imagePath}
        alt={props.clientName}
        width={579}
        height={397}
      />
      <div className={styles.projectInfos}>
        <span className={styles.projectId}>
          [{props.projectId}]
        </span>
        <span className={styles.clientName}>
          {props.clientName}
        </span>
        <p className={styles.projectDescription}>
          {props.projectDescription}
        </p>
        <ul className={styles.techUsed}>
          {props.techUsed.map((item, index) => (
            <li key={index} className={styles.techUsedItem}>
              [ {item} ]
            </li>
          ))}
        </ul>
      </div>
      <a
        href="#"
        onClick={navigateToProject}
        className={styles.projectCTA}
      >
        Voir le projet [↗]
      </a>
    </div>
  );
};

export default Project;
