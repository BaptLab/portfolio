import Offre from "../offre/Offre";
import styles from "./slideCarrousel.module.css";

const SlideCarrousel = (props) => {
  return (
    <div className={styles.offresContainer}>
      {props.offres.map((offre, index) => (
        <Offre
          key={index} // It's important to give a unique key for each element in the list
          offreId={offre.offreId}
          offreName={offre.offreName}
          offreTechnos={offre.offreTechnos}
          offreVersion={offre.offreVersion}
          offreBackOffice={offre.offreBackOffice}
          offreDescription={offre.offreDescription}
          offrePrice={offre.offrePrice}
        />
      ))}
    </div>
  );
};

export default SlideCarrousel;
