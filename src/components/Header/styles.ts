import styled from "styled-components";
import { pixelToRem } from "../../utils/pixelToRem";

export const Container = styled.div`
    background-color: #2D2D2D;
    width: 100%;
`

export const HeaderStyle = styled.header`
    background-color: #2D2D2D;
    max-width: ${pixelToRem(1200)};
    margin: 0 auto;
    padding: ${pixelToRem(15)};
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white-color);

    h1{
        font: var(--bold-font);
    }

    nav{
        & > button{
            display: none;
        }

        ul{
            display: flex;
            align-items: center;
            gap: ${pixelToRem(60)};

            li a, li > button{
                font: var(--semi-bold-font);
            }
        }
    }

    @media(max-width: 768px){
        nav{
            & > button{
                display: block;
            }

            ul{
                display: none;
                color: var(--black-color);

                &.open{
                    z-index: 1000;
                    position: fixed;
                    top: 61px;
                    right: 0;
                    width: 100vw;
                    height: calc(100vh - 61px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: space-around;
                    background-color: #fff;
                    overflow-y: auto;
                }

                li{
                    padding: 20px 40px;
                }
            }  
        }
    }
`