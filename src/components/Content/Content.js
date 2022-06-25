// import style from "./Content.module.css";
import {useSelector} from "react-redux";
import Card from "../Card/Card";
import StyledContent from "./StyledContent";


function Content({title}) {
    const dataList = useSelector((store)=>store.covid_data_reducers.global_covid)

    return (
    <StyledContent>
      <section className="contents">
        <h2 className="contents__title">{title}</h2>
        <h4 className="contents__description">Data COVID Berdasarkan {title}</h4>
        <div className="contents__container">
          {dataList.map((data,idx) => {
            return <Card key={idx} card={data} />;
          })}
        </div>
      </section>
    </StyledContent>
      
    )
}

export default Content;