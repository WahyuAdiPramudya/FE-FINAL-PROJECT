import styled from "styled-components";

const StyledForm = styled.div`
  /* Small Screen */
  margin: 1rem;

.addformdata {
  display: flex;
  flex-direction: column
}

.form_title{
  text-align:center;
}

.addformdata__left {
  margin-bottom: 1rem;
}

.addformdata__title {
  color: crimson;
  margin-bottom: 1rem;
  font-size: 2.44rem;
}

input[type="text"] {
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  display: flex;
  flex-direction: column;
}

select {
  width: 100%;
  margin: 0 auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  display: flex;
  flex-direction: column;
}

.addformdata__image {
  max-width: 70%;
  height: 40%;
  margin: 0 auto;
  border-radius: 25px;
}

@media (min-width: 768pxpx) {

  input[type="text"] {
  width: 70%;
  margin: 0 auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  display: flex;
  flex-direction: column;
}

select {
  width: 70%;
  margin: 0 auto;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  display: flex;
  flex-direction: column;
}

  .container {
    max-width: 100%;
    margin: 3rem auto;
  }

  .addformdata__title {
    color: crimson;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  label.addformdata__add_form_title {
    display: block;
    line-height: 150%;
    font-size: 1.2em;
  }

  h2 {
    text-align:center;
  }

  .addformdata__left {
    flex-basis: 55%;
  }

  .addformdata__right {
    flex-basis: 40%;
  }

  .addform label{
  }
}

/* Lerge Screen */
@media (min-width: 992px) {
  .container {
    max-width: 100%;
    width: 100%;
    margin: 3rem auto;
  }

  .addformdata__title {
    color: crimson;
    margin-bottom: 1rem;
    font-size: 1.4rem;
  }

  label.addformdata__add_form_title {
    display: block;
    line-height: 150%;
    font-size: 1.2em;
  }

  label.addformdata__add_form_date {
    display: block;
    line-height: 150%;
    font-size: 1.2em;
  }

  .addformdata {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .addformdata__left {
    flex-basis: 55%;
  }

  .addformdata__right {
    flex-basis: 40%;
  }
}
`;

export default StyledForm;