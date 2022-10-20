import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";

export const Container = styled.section`
    margin: 120px auto 100px auto;
    max-width: 1170px;
    min-height: 100vh;
    height: max-content;
    background-color: var(--white-color);

    @media(max-width: 1200px){
        width: 70%;
    }
`

export const FirstLine = styled.div`
    display: flex;
    align-items: center;

    img{
        width: 50%;
    }

    div{
        width: 50%;
        padding: ${pixelToRem(120)};

        span{
            font: var(--normal-font);
            color: var(--semi-black-color);
        }

        p{
            font: var(--semi-bold-font);
            color: var(--black-color);
        }

        h2{
            font: var(--bold-font);
            color: var(--yellow-color);
        }
    }

    @media(max-width: 1200px){
        &{
            div{
                padding: ${pixelToRem(40)};

                h2{
                    max-width: 25ch;
                }
            }
        }
    }

    @media(max-width: 850px){
        &{
            flex-direction: column;

            img, div{
                width: 100%
            }

            div{
                padding: ${pixelToRem(40)};
            }
        }
    }
`

export const SecondLine = styled.div`
    padding: ${pixelToRem(120, 250)};

    @media(max-width: 1200px){
        &{
            padding: ${pixelToRem(120, 40)};
        }

        p{
            text-align: justify;
        }
    }

    @media(max-width: 850px){
        &{
            padding: ${pixelToRem(0, 40)};
        }

        p{
            padding: ${pixelToRem(0, 0, 20, 0)};
        }
    }
`