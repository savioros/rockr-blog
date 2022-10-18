import styled from "styled-components";

export const Container = styled.ul`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 250px;
    grid-auto-flow: dense;
    row-gap: 50px;
`

export const CardWrapper = styled.li`
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    background-color: var(--white-color);
    transition: .2s ease-out;

    &:nth-child(3n){
        grid-column: span 2;
        grid-row: span 2;
    }

    img{
        width: 100%;
        min-width: 320px;
        height: 100%;
        object-fit: cover;
    }

    div{
        padding: 40px;

        p{
            max-width: 25ch;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 5;
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
    }
`