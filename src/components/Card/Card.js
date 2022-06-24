import styles from "./Card.module.css"

function Card(props){
    const data = props
    return(
        <div className={styles.card}>
            <h3 className={styles.card__title}>{data.card.status}</h3>
            <h2 className={styles.card__subtitle}>{data.card.value}</h2>
        </div>
    );
}

export default Card;