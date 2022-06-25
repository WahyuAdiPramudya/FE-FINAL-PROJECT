import styled from "styled-components";

const StyledContent = styled.div`
    margin: 5rem auto;

    section{
        margin: 5rem 0;
        text-align: center;
    }

    h2{
        margin-bottom: 1rem;
        font-size: 3.815rem;
        color: #00B0FF;
    }

    h4{
        font-size: 1.953rem;
        color: #073B4C;
    }

    @media (min-width: 768px) {
        .contents__container {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }

        .content {
            flex-basis: 75%;
            width: auto;
        }
    }

    /* Large Screen */
    @media (min-width: 992px) {
        max-width: 1200px;
        margin: 3rem auto;

        .content {
            flex-basis: 30%;
            width: auto;
        }
    }
`;

export default StyledContent;