import styled, { keyframes } from "styled-components";

const loading = keyframes`
    0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`

export const Container = styled.div`
    width: 100vw;
`

export const LoadingWarraper = styled.div`
    height: 80px;
    width: 80px;
    border-radius: 50%;
    border: 8px solid #000;
    border-left: 8px solid #fff;
    animation: ${loading} 1s infinite; 
    margin: 90px auto 0 auto;
`