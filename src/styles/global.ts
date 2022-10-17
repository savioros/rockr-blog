import { createGlobalStyle } from "styled-components";
import { pixelToRem } from "../utils/pixelToRem";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Rubik', sans-serif;
    }

    :root{
        --normal-font: 400 ${pixelToRem(12)}/${pixelToRem(22)} 'Rubik', sans-serif;
        --semi-bold-font: 500 ${pixelToRem(20)}/${pixelToRem(26)} 'Rubik', sans-serif;
        --bold-font: 700 ${pixelToRem(24)}/${pixelToRem(31)} 'Rubik', sans-serif;

        --white-color: #fff;
        --semi-black-color: #2d2d2d;
        --black-color: #000;
        --yellow-color: #F1A10A;
    }

    html, body{
        height: 100%;
        width: 100%;
    }

    body{
        background: linear-gradient(90deg, #F1A10A 0%, #342303 100%);
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    img{
        max-width: 100%;
        display: block;
    }

    button{
        border: none;
        cursor: pointer;
        background-color: transparent;
        color: inherit;
    }
`