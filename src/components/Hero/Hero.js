import poster from "../../image/undraw_medical_research.png";
import Button from "../ui/Button";
import StyledHero from "./StyledHero";

function Hero() {
    return (
        <StyledHero>
            <section className="hero">
                <div className="hero__left">
                    <h2 className="hero__title">Covid ID</h2>
                    <h3 className="hero_genre">Monitoring Perkembangan Covid</h3>
                    <p className="hero__description">
                        Ini adalah aplikasi untuk memonitoring kasus COVID-19, aplikasi ini dapat memantau perkembangan kasus covid didunia, dan juga di indonesia
                    </p>
                    <Button variant="primary">Vaccine</Button>
                </div>
                <div className="hero__right">

                    <img className="hero__image" src={poster} alt="placeholder"/>
                </div>
            </section>
        </StyledHero>
    )
}

export default Hero;