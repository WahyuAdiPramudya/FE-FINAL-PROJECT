import StyledCard from "./StyledCard"

function Card(props){
    const data = props
    return(
        <StyledCard>
            <h3>{data.card.status}</h3>
            <h2>{data.card.value}</h2>
        </StyledCard>
    );
}

export default Card;