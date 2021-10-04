import MountainCarouselCard from "@/components/MountainCarouselCard";
import style from "@/styles/mountaincard.module.scss";
import { Carousel } from "react-responsive-carousel";

const MountainCarousel = ({ mountains }) => {
  return (
    <div className={style.carouselContainer}>
      <h2>OVERVIEW OF ALL THE BEAUTIFUL MOUNTAINS</h2>
      <Carousel
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        {mountains.map((mountain) => (
          <div key={mountain.id} className={style.nojjan}>
            <div
              className={`${style.imageContainer} ${style.carouselContainer}`}
              style={{
                backgroundImage: `url(${mountain.thumbnail_photo})`,
              }}
            >
              <div className={style.overlay}></div>
            </div>
            <div className={style.contentContainer}>
              <h3>{mountain.name}</h3>
              <p>{` [ ${mountain.height}m ]`}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MountainCarousel;
