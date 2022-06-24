import style from "./Content.module.css";
// import data from "../../utils/constants/indonesia";
import {useSelector} from "react-redux";
import Card from "../Card/Card";

function Content({title}) {
    const dataList = useSelector((store)=>store.covid_data_reducers.global_covid)
    // console.log(dataList);

    return (
    <div>
        <div className={style.container}>
          <section className={style.contents}>
            <h2 className={style.contents__title}>{title}</h2>
            <h4 className={style.contents__description}>Data COVID Berdasarkan {title}</h4>
            <div className={style.contents__container}>
              {dataList.map((data,idx) => {
                return <Card key={idx} card={data} />;
              })}
            </div>
          </section>
        </div>
    </div>
      
    )
}

export default Content;