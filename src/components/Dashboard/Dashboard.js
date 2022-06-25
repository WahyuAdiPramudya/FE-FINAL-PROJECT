// import style from "./Dashboard.module.css";
import {useSelector} from "react-redux"
import StyledDashboard from "./StyledDashboard";

function Dashboard({title}) {
  const imageDashboard = useSelector((store)=>store.covid_data_reducers.dashboard_url)
    return (
    <>
      <StyledDashboard>
        <section className="contents">
          <h2 className="contents__title">Dashboard</h2>
          <h4 className="contents__description">Dashboard Data {title}</h4>
          <div className="contents__container">
          <img className="hero__image" src={imageDashboard} alt="placeholder"/>
          </div>
        </section>
      </StyledDashboard>
    </>
    )
}

export default Dashboard;