import { useState } from "react";
import { useSwipeable } from "react-swipeable"; // Import swipeable hook
import Offre from "../offre/Offre";
import styles from "./slideCarrousel.module.css";

const SlideCarrousel = ({ offres }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlidingOut, setIsSlidingOut] = useState(false);
  const [isSlidingIn, setIsSlidingIn] = useState(false);
  const [direction, setDirection] = useState("right");

  const nextSlide = () => {
    setIsSlidingOut(true);
    setDirection("right");
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % offres.length
      );
      setIsSlidingOut(false);
      setIsSlidingIn(true);
      setTimeout(() => {
        setIsSlidingIn(false);
      }, 500);
    }, 500);
  };

  const prevSlide = () => {
    setIsSlidingOut(true);
    setDirection("left");
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? offres.length - 1 : prevIndex - 1
      );
      setIsSlidingOut(false);
      setIsSlidingIn(true);
      setTimeout(() => {
        setIsSlidingIn(false);
      }, 500);
    }, 500);
  };

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: nextSlide, // Swipe left to go to the next slide
    onSwipedRight: prevSlide, // Swipe right to go to the previous slide
    preventDefaultTouchmoveEvent: true, // Prevent scrolling while swiping
    trackMouse: true, // Optional: allows mouse dragging for testing
  });

  return (
    <div {...handlers} className={styles.carouselContainer}>
      {/* Left arrow button for desktop */}
      <button
        className={styles.navButton}
        onClick={prevSlide}
      >
        &#8592;
      </button>

      {/* Carousel content */}
      <div
        className={`${styles.offresWrapper} ${
          isSlidingOut
            ? direction === "right"
              ? styles.slideOutLeft
              : styles.slideOutRight
            : ""
        } ${
          isSlidingIn
            ? direction === "right"
              ? styles.slideInRight
              : styles.slideInLeft
            : ""
        }`}
      >
        <Offre
          key={currentIndex}
          offreId={offres[currentIndex].offreId}
          offreName={offres[currentIndex].offreName}
          offreTechnos={offres[currentIndex].offreTechnos}
          offreVersion={offres[currentIndex].offreVersion}
          offreBackOffice={
            offres[currentIndex].offreBackOffice
          }
          offreDescription={
            offres[currentIndex].offreDescription
          }
          offrePrice={offres[currentIndex].offrePrice}
        />
      </div>

      {/* Right arrow button for desktop */}
      <button
        className={styles.navButton}
        onClick={nextSlide}
      >
        &#8594;
      </button>

      {/* Dots indicator */}
      <div className={styles.dotsContainer}>
        {offres.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.activeDot : ""
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlideCarrousel;
