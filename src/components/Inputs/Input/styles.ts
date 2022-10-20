import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    span{
        color: red;
        position: absolute;
        margin-top: 87px;
    }
`

export const Label = styled.label`
    font: var(--semi-bold-font);
    color: var(--black-color);
`

export const InputStyle = styled.input`
    padding: 16px 18px;
`