import styled, { isStyledComponent } from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .6);
    z-index: 9999;
`

export const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: max-content;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;

    h2{
        font: var(--bold-font);
        color: var(--yellow-color);
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;
        margin-top: 50px;
    }
`

export const HeaderModal = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    button{
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 32px;
    }
`