import styled from "styled-components";

const StyledNavbar = styled.div`
    /* Small Screen */
    background-color: #00B0FF;
    padding: 1rem;
    color: #fff;

.container__menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar__title {
  margin-bottom: 1rem;
}

.navbar__list {
  list-style: none;
  padding-left: 0;
}

.navbar__item {
  margin-bottom: 1rem;
}

/* Medium Screen */
@media (min-width: 768px) {
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navbar__title {
    margin: 0;
  }

  .navbar__list {
    display: flex;
  }

  .navbar__item {
    margin: 0 1rem;
  }

  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  span{
  background: white;
  width: 25px;
  height: 3px;
  display: block;
}

span:not(:last-child){
  margin-bottom: 5px;
}
.container__menu{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
}
`;

export default StyledNavbar