import Image from "next/image";
import Logo from "@/images/logos/logo.svg";
import style from "@/styles/header.module.scss";

const HeaderSection = () => {
  return (
    <header className={`${style.header} ${"darkSection"}`}>
      <Image src={Logo} layout="responsive" alt="logo"/>
      <h1>ENTER THE WORLD OF THE GIANTS</h1>
      <h2>WE PROVIDE YOU WITH THE INFO YOU NEED</h2>
    </header>
  );
};

export default HeaderSection;
