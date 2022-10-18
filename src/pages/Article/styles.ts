import styled from "styled-components";

export const Container = styled.section`
    margin: 120px auto 100px auto;
    max-width: 1170px;
    height: max-content;
    background-color: var(--white-color);
`

export const FirstLine = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 100%;
    }

    div{
        padding: 120px;

        span{
            font: var(--normal-font);
            color: var(--semi-black-color);
        }

        p{
            font: var(--semi-bold-font);
            color: var(--black-color);
        }

        h2{
            font: var(--bold-font);
            color: var(--yellow-color);
        }
    }
`

export const SecondLine = styled.div`
    padding: 120px 250px;
`