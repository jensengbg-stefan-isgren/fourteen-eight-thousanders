import { Carousel } from "react-responsive-carousel";
import style from "@/styles/mountaincard.module.scss";
import MountainCarouselCard from "@/components/MountainCarouselCard";

const MountainCarousel = ({ mountains }) => {
  return (
    <div className={style.carouselContainer}>
      <Carousel
        showIndicators={true}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
        showStatus={false}
        showArrows={true}
      >
        {mountains.map((mountain) => (
         
            <div
              className={`${style.imageContainer}`}
              style={{
                backgroundImage: `url(${mountain.thumbnail_photo})`,
              }}
            >
              <div className={style.overlay}>
                <h3>{mountain.name}</h3>
              </div>
            </div>
          
     
        ))}
      </Carousel>
    </div>
  );
};

export default MountainCarousel;
