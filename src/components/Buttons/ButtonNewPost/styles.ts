import styled from "styled-components";
import { pixelToRem } from "../../../utils/pixelToRem";

export const ButtonContainer = styled.button`
    font-size: ${pixelToRem(14)};
    font-weight: 700;
    background-color: var(--yellow-color);
    padding: ${pixelToRem(10, 25)};
    border-radius: ${pixelToRem(15)};
`