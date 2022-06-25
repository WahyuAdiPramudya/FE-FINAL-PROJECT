import styled from "styled-components";

const Table = styled.div`
    /* Small Screen */
.container {
  margin: 1rem;
}

table {
  width: 100%;
}

table {
  table-layout: fixed;
  width: 100%;
}

.contents__container {
  display: flex;
  flex-direction: column;
}

.contents {
  margin: 5rem 0;
  text-align: center;
}

.contents__title {
  margin-bottom: 1rem;
  font-size: 3.815rem;
  color: #00B0FF;
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
  flex-basis: 70%;
  width: 384px;
  height: 329px;
  margin: 18px auto;
  /* text-align: center; */
  /* margin-left: 10px; */
}

/* Medium Screen */
@media (min-width: 768px) {
  .contents__container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}

/* Large Screen */
@media (min-width: 992px) {
  .container {
    max-width: 1200px;
    margin: 3rem auto;
  }
}

h1{
  font-family: sans-serif;
}
 
table {
  font-family: Arial, Helvetica, sans-serif;
  color: #666;
  /* text-shadow: 1px 1px 0px #fff; */
  background: #eaebec;
  border: #ccc 1px solid;
}
 
table th {
  padding: 15px 35px;
  border-left:1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  background: #00B0FF;
}
 
table th:first-child{  
  border-left:none;  
}
 
table tr {
  text-align: center;
  padding-left: 20px;
}
 
table td:first-child {
  text-align: center;
  padding-left: 20px;
  border-left: 0;
}
 
table td {
  padding: 15px 35px;
  border-top: 1px solid #ffffff;
  border-bottom: 1px solid #e0e0e0;
  border-left: 1px solid #e0e0e0;
  background: #fafafa;
  background: -webkit-gradient(linear, left top, left bottom, from(#fbfbfb), to(#fafafa));
  background: -moz-linear-gradient(top, #fbfbfb, #fafafa);
}
 
table tr:last-child td {
  border-bottom: 0;
}
 
table tr:last-child td:first-child {
  -moz-border-radius-bottomleft: 3px;
  -webkit-border-bottom-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
 
table tr:last-child td:last-child {
  -moz-border-radius-bottomright: 3px;
  -webkit-border-bottom-right-radius: 3px;
  border-bottom-right-radius: 3px;
}
 
table tr:hover td {
  background: #f2f2f2;
  background: -webkit-gradient(linear, left top, left bottom, from(#f2f2f2), to(#f0f0f0));
  background: -moz-linear-gradient(top, #f2f2f2, #f0f0f0);
}

`;

export default Table