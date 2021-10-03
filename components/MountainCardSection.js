import { useState, useRef } from "react";
import ToggleButton from "@/components/ToggleButton";
import MountainCard from "@/components/MountainCard";
import style from "@/styles/mountaincard.module.scss";

const MountainCardSection = ({ mountains }) => {
  const [isOpen, setIsOpen] = useState(false);
  const parentRef = useRef();

  return (
    <section className={`${style.mountainCardSection} ${"darkSection"}`}>
      <div className={style.collapse}>
        <ToggleButton
          btnText={"MEET THE GIANTS OF THE WORLD"}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          toggleBtnClass={"toggleBtnClass"}
        />
        <div
          style={
            isOpen
              ? { height: parentRef.current.scrollHeight + "px" }
              : { height: "0px" }
          }
          ref={parentRef}
          className={` ${
            isOpen
              ? `${style.contentParent} ${style.show}`
              : `${style.contentParent}`
          }`}
        >
          <div className={`${style.mountainCardContainer} ${style.content}`}>
            {mountains.map((mountain) => (
              <MountainCard mountain={mountain} key={mountain.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MountainCardSection;
