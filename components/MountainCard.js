import style from '@/styles/mountaincard.module.scss'

const MountainCard = ({mountain}) => {
  return (
    <article className={style.cardContainer}>
      <div className={style.imageContainer}>
      <img src={mountain.thumbnail_photo} alt="" />
      </div>
      <div className={style.contentContainer}>
     
       
      </div>
     
    </article>
  )
}

export default MountainCard
