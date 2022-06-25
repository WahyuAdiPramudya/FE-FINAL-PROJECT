import styled from "styled-components";

const StyledCard = styled.div`
    max-width: 100%;
    height: auto;
    margin-right: 5%;
    background: #FFFFFF;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-bottom:3px;
    
h3 {
    font-size: 2rem;
    color: #64748b;
}

h2 {
    font-size: 40px;
}

:first-child h2{
    color: #ffa600;
}

:nth-child(2) h2 {
    color: #FF0000;
}

:nth-child(3) h2 {
    color: #00B0FF
}

/* medium screen */
@media (min-width: 768px) {
    flex-basis: 50%;
}

/* Large Screen */
@media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
}
`;

export default StyledCard;