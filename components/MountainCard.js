import style from "@/styles/mountaincard.module.scss";
const MountainCard = ({ mountain }) => {
  const { name, height, summits, deaths, death_rate } = mountain;

  return (
    <article className={style.cardC}>
      <div className={style.imageC}>
        <img src={mountain.thumbnail_photo} alt="" />
      </div>
      <div className={style.contentC}>
        <h3>Name: {name}</h3>
        <p>Height: {height}</p>
        <p>Summits: {summits}</p>
        <p>Deaths: {deaths}</p>
        <p>Deathrate: {death_rate}</p>
      </div>
    </article>
  );
};

export default MountainCard;
