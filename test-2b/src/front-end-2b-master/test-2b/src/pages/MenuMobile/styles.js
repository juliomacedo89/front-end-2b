import styled from 'styled-components'

export const Container = styled.header `
    width: 100%;
    background: var(--black);
`

export const Content = styled.div `
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 5rem;

    padding: 3rem;

    .closeMenu{
        width: 100%;

        display: flex;
        align-items: center;
        justify-content: flex-end;

        img{
            width: 100%;
            max-width: 20px;
        }
    }

    .menuInteraction{
        nav{
            ul{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 3rem;

                li{
                    a{
                        font-size: 2rem;
                        font-weight: 700;

                        color: var(--yellow);
                    }
                }
            }
        }
    }


`