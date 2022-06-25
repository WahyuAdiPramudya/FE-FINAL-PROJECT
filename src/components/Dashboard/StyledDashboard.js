import styled from "styled-components";

const StyledDashboard = styled.div`
   /* Small Screen */
  margin: 1rem;

.contents__container {
  display: flex;
  flex-direction: column;
}

.contents {
  margin: 5rem 0;
  text-align: center;
}

.hero__image {
  max-width: 100%;
  width: 500px;
  height: auto;
  border-radius: 25px;
}



.contents__title {
  margin-bottom: 1rem;
  font-size: 3.815rem;
  color: #00B0FF;
}

h3 {
  display: block;
  font-size: 1.17em;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

h4 {
  display: block;
  margin-block-start: 1.33em;
  margin-block-end: 1.33em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
}

.content__count {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  /* identical to box height */
  text-align: center;
  color: #00B0FF;
  font-size: 3rem;
  /* margin-bottom: 1rem; */
}


.content__status {
  /* margin-bottom: 1rem; */
  font-size: 1.953rem;
  margin-top: 5rem;
  color: #073B4C;
}

.contents__description {
  /* margin-bottom: 1rem; */
  font-size: 1.953rem;
  color: #073B4C;
}


.content{
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin: 1rem auto;
  padding: 1rem auto;
  flex-basis: 80%;
  width: 609px;
  height: 318px;

  /* margin: 18px auto; */
  /* text-align: center; */
  /* margin-left: 10px; */
}

.hero__image {
  width: auto;
}

/* Medium Screen */
@media (min-width: 768px) {
  .contents__container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .content {
    width: 609px;
    height: 318px;
    flex-basis: 0%;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
    margin: 3rem auto;
  }

  .content {
    width: 1000px;
    height: 522.5px;
  }

  .hero__image {
    max-width: 100%;
    width: 1000px;
    height: auto;
    border-radius: 25px;
  }
}
`;

export default StyledDashboard;