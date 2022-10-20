import styled from "styled-components";

export const Container = styled.main`
    min-height: 100vh;
`

export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 120px auto 100px auto;
    padding: 50px;
    max-width: 1170px;
    height: max-content;
    background-color: var(--white-color);

    @media(max-width: 1200px){
        width: 70%;
    }

    @media(max-width: 700px){
        width: 90%;
    }
`

export const ArticleHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
        width: 250px;
        height: 250px;
        border-radius: 50%;
        background-color: var(--semi-black-color);
    }
    
    h2{
        margin-top: 70px;
        font: var(--bold-font);
        color: var(--yellow-color);
    }

    @media(max-width: 700px){
        div{
            width: 200px;
            height: 200px;
        }
    }
`