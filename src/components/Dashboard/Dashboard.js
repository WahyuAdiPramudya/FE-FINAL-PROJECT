import style from "./Dashboard.module.css";
import poster from "../../image/undraw_medical_care_movn.png";

function Dashboard() {
    return (
      <div>
      <div className={style.container}>
        <section className={style.contents}>
          <h2 className={style.contents__title}>Dashboard</h2>
          <h4 className={style.contents__description}>Dashboard Data Global</h4>
          <div className={style.contents__container}>
          <img className={style.hero__image} src={poster} alt="placeholder"/>
          </div>
        </section>
      </div>
    </div>
      
    )
}

export default Dashboard;