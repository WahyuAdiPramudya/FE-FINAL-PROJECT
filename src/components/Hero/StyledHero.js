import styled from "styled-components";

const StyledHero = styled.div`

  margin: 1rem;

.hero {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.hero__left {
  order:1;
  margin-bottom: 1rem;
}
.hero__right {
  /* order:1; */
}

.hero__title {
  color: #00B0FF;
  margin-bottom: 1rem;
  font-size: 2.44rem;
}

.hero__genre {
  color: #118AB2;
  margin-bottom: 1rem;
  font-size: 1.59rem;
}

.hero__description {
  color: rgb(4, 117, 155);
  margin-bottom: 1rem;
}

.hero__button {
  font-family: 'Poppins';
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  background-color: #00B0FF;
  color:#ffffff;
}

.hero__image {
  max-width: 100%;
  width: 500px;
  height: auto;
  border-radius: 25px;
}

/* Lerge Screen */
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
    margin: 3rem auto;
  }

.hero__left {
  order:0;
}

  .hero {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }

  .hero__left {
    flex-basis: 55%;
  }

  .hero__right {
    flex-basis: 40%;
  }

  .hero {
    padding: 0 5rem;
}
}
`;

export default StyledHero