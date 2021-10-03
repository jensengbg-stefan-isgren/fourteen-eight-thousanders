import Image from "next/image";
import Logo from "@/images/logos/logo.svg";
import style from "@/styles/header.module.scss";

const HeaderSection = () => {
  return (
    <header className={style.header}>
      <Image src={Logo} layout="responsive"/>
    </header>
  );
};

export default HeaderSection;
