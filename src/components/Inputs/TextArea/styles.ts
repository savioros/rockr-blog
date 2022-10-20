import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    width: 100%;

    span{
        color: red;
        height: 19px;
    }
`

export const Label = styled.label`
    font: var(--semi-bold-font);
    color: var(--black-color);
`

export const TextAreaStyle = styled.textarea`
    padding: 16px 0 16px 18px;
`