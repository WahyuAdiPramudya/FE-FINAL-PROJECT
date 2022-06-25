import styled from "styled-components";

const StyledFooter = styled.div`
    /* Small Screen */
    background-color: #00B0FF;
    color: #fff;
    padding: 1rem;
    text-align: center;
    display: flex;

  .navbar__title {
    margin-bottom: 1rem;
  }

  .footer{
    display: flex;
  }
  
  .navbar__list {
    list-style: none;
  }
  
  .navbar__item {
    margin-bottom: 1rem;
  }
  
  .footer__title {
    margin-bottom: 1rem;
  }
  
  .footer__author {
    margin-bottom: 1rem;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    
  }
`;

export default StyledFooter;