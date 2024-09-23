import styles from "./competence.module.css";

const Competence = (props) => {
  return (
    <div className={styles.competenceContainer}>
      {/* Logo element positioned absolutely */}
      <div className={styles.logoContainer}>
        <img
          src={props.logoPath}
          alt="Logo"
          className={styles.logo}
        />
      </div>

      <h3 className={styles.competenceTitle}>
        {props.title}
      </h3>

      <p className={styles.competenceDescription}>
        {props.description}
      </p>

      <ul className={styles.competenceListContainer}>
        {props.competenceList.map((item, index) => (
          <li
            key={index}
            className={styles.competenceListElement}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Competence;
