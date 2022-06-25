import styled from "styled-components";

const StyledContent = styled.div`
    margin: 5rem auto;
    .contents__container {
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-wrap: wrap;
        gap:2rem;
    }

    section{
        margin: 5rem 0;
        text-align: center;
    }

    .contents__title{
        margin-bottom: 1rem;
        font-size: 3.815rem;
        color: #00B0FF;
    }

    .contents__description{
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