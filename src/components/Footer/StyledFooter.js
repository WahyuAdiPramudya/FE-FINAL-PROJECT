import styled from "styled-components";

const StyledFooter = styled.div`
    /* Small Screen */
    background-color: #00B0FF;
    color: #fff;
    padding: 1rem;
    text-align: center;
    display: flex;

  .footer{
    display: flex;
    flex-direction:column;
  }

  .footer__list {
  list-style: none;
  padding-left: 0;
  text-align: left;
}
  
  .footer__item {
    margin-bottom: 1rem;
  }
  
  .footer__title {
    margin-bottom:0;
    margin-top: 0;
  }
  
  .footer__author {
    margin-bottom:0;
    margin-top: 5px;
  }
  
  /* Medium Screen */
  @media (min-width: 768px) {
    .footer{
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content:space-between;
    }

    .footer__list{
        display: flex;
    }

    .footer__item{
        margin-right:1.7rem;
    }
  }
  
  /* Large Screen */
  @media (min-width: 992px) {
    .footer__item{
        margin-bottom:0;
    }
  }
`;

export default StyledFooter;