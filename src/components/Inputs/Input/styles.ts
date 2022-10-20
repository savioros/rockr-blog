import styled from "styled-components";
import { pixelToRem } from "../../../utils/pixelToRem";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    span{
        color: red;
        position: absolute;
        margin-top: ${pixelToRem(87)};
    }
`

export const Label = styled.label`
    font: var(--semi-bold-font);
    color: var(--black-color);
    margin-bottom: ${pixelToRem(8)};
`

export const InputStyle = styled.input`
    padding: ${pixelToRem(16, 18)};
`