import MountainCard from "@/components/MountainCard"
import style from '@/styles/mountaincard.module.scss'

const MountainCardSection = ({mountains}) => {
  return (
    <div className={style.titleContainer}>
      <p>FÄLL UT</p>
            <section className={style.mountainCardSection}>
         {mountains.map(mountain => (
        <MountainCard mountain={mountain} key={mountain.id}/>
       ))}
    </section>  
    </div>

  )
}

export default MountainCardSection
