import styles from "./offre.module.css";

const Offre = (props) => {
  return (
    <div className={styles.offreContainer}>
      <span className={styles.offreId}>
        [{props.offreId}]
      </span>
      <h3 className={styles.offreName}>
        {props.offreName}
      </h3>
      <span className={styles.offreTitle}>
        Technologies
      </span>
      <span className={styles.offreTechnos}>
        {props.offreTechnos}
      </span>

      <span className={styles.offreTitle}>Version</span>
      <span className={styles.offreVersion}>
        {props.offreVersion}
      </span>

      <span className={styles.offreTitle}>Back-Office</span>
      <span className={styles.offreBackOffice}>
        {props.offreBackOffice}
      </span>

      <span className={styles.offreTitle}>Description</span>
      <span className={styles.offreDescription}>
        {props.offreDescription}
      </span>
      <span className={styles.offreTitle}>Prix</span>
      <span className={styles.offrePrice}>
        {props.offrePrice}
      </span>
    </div>
  );
};

export default Offre;
