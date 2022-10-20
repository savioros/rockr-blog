import styled from "styled-components";
import { pixelToRem } from "../../../utils/pixelToRem";

export const ButtonStyle = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${pixelToRem(20)};
    background-color: var(--black-color);
    color: #fff;
    padding: ${pixelToRem(10, 30)};
    font: var(--semi-bold-font);
    border-radius: ${pixelToRem(4)};
    transition: .2s ease-out;

    &:hover{
        background-color: var(--semi-black-color);
    }
`