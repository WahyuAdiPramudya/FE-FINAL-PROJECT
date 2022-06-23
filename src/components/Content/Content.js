import style from "./Content.module.css";

function Content() {
    return (
      <div>
      <div className={style.container}>
        <section className={style.contents}>
          <h2 className={style.contents__title}>Global</h2>
          <h4 className={style.contents__description}>Data COVID Berdasarkan Global</h4>
          <div className={style.contents__container}>
            <div className={style.content}>
              <h3 className={style.content__status}>Confirmed</h3>
              <h4 className={style.content__count}>1000</h4>
              {/* <h4 className={style.content__title}>More Info</h4> */}
            </div>
            <div className={style.content}>
              <h3 className={style.content__status}>Death</h3>
              <h4 className={style.content__count}>1000</h4>
              {/* <h4 className={style.content__title}>More Info</h4> */}
            </div>
            <div className={style.content}>
              <h3 className={style.content__status}>Recovered</h3>
              <h4 className={style.content__count}>1000</h4>
              {/* <h4 className={style.content__title}>More Info</h4> */}
            </div>
            
          </div>
        </section>
      </div>
    </div>
      
    )
}

export default Content;