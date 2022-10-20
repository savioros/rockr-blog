import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    row-gap: 50px;

    @media(max-width: 1200px){
        &{
            grid-template-columns: 1fr;
            padding: 0 40px 40px;
        }
    }
`

export const CardWrapper = styled.li`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: var(--white-color);
    transition: .2s ease-out;

    &:nth-child(3n), &:nth-child(6n){
        grid-column: span 2;
        grid-row: span 2;
        width: 1000px;
    }

    &:nth-child(3n){
        justify-self: end;
    }

    &:nth-child(6n){
        justify-self: start;
    }

    img{
        width: 40%;
        height: 100%;
        object-fit: cover;
    }

    div{
        width: 60%;
        padding: ${pixelToRem(40)};

        h2, p{
            max-width: 25ch;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        h2{
            font: var(--bold-font);
            color: var(--yellow-color);
        }
    }

    button{
        position: absolute;
        right: 20px;
        bottom: 10px;
        font-size: 24px;
        transition: .2s ease-out;

        &:hover{
            transform: scale(1.3);
        }
    }

    @media(max-width: 1200px){
        &:nth-child(3n), &:nth-child(6n){
            grid-column: initial;
            grid-row: initial;
            justify-self: stretch;
            width: 100%;
        }
    }
`