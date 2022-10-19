import styled from "styled-components";

export const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: var(--black-color);
    color: #fff;
    padding: 10px 30px;
    font: var(--semi-bold-font);
    border-radius: 4px;
    transition: .2s ease-out;

    &:hover{
        background-color: var(--semi-black-color);
    }
`