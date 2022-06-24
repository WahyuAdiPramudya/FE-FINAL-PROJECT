// import style component
import styled, { css } from "styled-components";

// buat object warna
const colors = {
    primary:"#00B0FF",
    secondary:"#F87474",
}

const Button = styled.button`
    padding:0.8rem;
    border:none;
    border-radius:10px;
    color:#fff;
    background-color:#4561ee;
    cursor:pointer;
    width:150px;
    /* height:30px; */

    /* menangkap props */
    background-color:${({variant})=>colors[variant] || colors.primary};

    /*  */
    ${(props) => props.full && css`
        display:block;
        width:100%;
    `}
`;

export default Button;