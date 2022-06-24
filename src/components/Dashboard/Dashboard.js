import style from "./Dashboard.module.css";
import {useSelector} from "react-redux"

function Dashboard({title}) {
  const imageDashboard = useSelector((store)=>store.covid_data_reducers.dashboard_url)
    return (
    <>
      <div className={style.container}>
        <section className={style.contents}>
          <h2 className={style.contents__title}>Dashboard</h2>
          <h4 className={style.contents__description}>Dashboard Data {title}</h4>
          <div className={style.contents__container}>
          <img className={style.hero__image} src={imageDashboard} alt="placeholder"/>
          </div>
        </section>
      </div>
    </>
    )
}

export default Dashboard;