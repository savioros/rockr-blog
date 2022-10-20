import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${pixelToRem(30)};
    margin-top: ${pixelToRem(50)};
    width: ${pixelToRem(400)};

    @media(max-width: 700px){
        width: 90%;
    }
`