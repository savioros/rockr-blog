import styled from "styled-components";

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    margin-top: 50px;
    width: 400px;

    @media(max-width: 700px){
        width: 90%;
    }
`