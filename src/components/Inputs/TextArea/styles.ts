import styled from "styled-components";
import { pixelToRem } from "../../../utils/pixelToRem";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${pixelToRem(4)};
    width: 100%;

    span{
        color: red;
        height: ${pixelToRem(19)};
    }
`

export const Label = styled.label`
    font: var(--semi-bold-font);
    color: var(--black-color);
`

export const TextAreaStyle = styled.textarea`
    padding: ${pixelToRem(16, 0, 16, 18)};
`