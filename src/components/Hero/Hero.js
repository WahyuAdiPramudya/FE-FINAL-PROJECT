import style from "./Hero.module.css";
import poster from "../../image/undraw_medical_research.png";

function Hero() {
    return (
        <div className={style.container}>
            <section className={style.hero}>
                <div className={style.hero__left}>
                    <h2 className={style.hero__title}>Covid ID</h2>
                    <h3 className={style.hero_genre}>Monitoring Perkembangan Covid</h3>
                    <p className={style.hero__description}>
                        Ini adalah aplikasi untuk memonitoring kasus COVID-19, aplikasi ini dapat memantau perkembangan kasus covid didunia, dan juga di indonesia
                    </p>
                    <button className={style.hero__button}>Vaccine</button>
                </div>
                <div className={style.hero__rigth}>

                    <img className={style.hero__image} src={poster} alt="placeholder"/>
                </div>
            </section>
        </div>
    )
}

export default Hero;