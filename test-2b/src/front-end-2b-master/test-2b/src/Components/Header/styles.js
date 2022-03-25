import styled from 'styled-components'

export const Container = styled.header `
    width: 100%;
    background: var(--yellow);
`

export const Content = styled.div `
    width: 100%;
    max-width: 1075px;
    margin: 0 auto;

    display: flex;
    align-items: center;

    padding: 3.75rem 1rem;

    @media(max-width: 900px){
        padding: 2rem 1rem;
    }

    .logo{
        width: 54%;

        img{
            
            width: min(70%, 150px);
        }
    }

    .menu{
        width: 46%;

        @media(max-width: 900px){
            display: flex;
            justify-content: flex-end;

            padding: 0 1rem;
        }

        nav{
            width: 100%;
            height: 3.5rem;

            display: flex;
            align-items: center;

            @media(max-width: 900px){
                display: none;
                justify-content: flex-end;
            }

            ul{
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 4.375rem;

                li{
                    height: 100%;
                    
                    a{
                        font-size: 1.375rem;
                        line-height: 2em;
                        font-weight: 700;

                        padding: .35rem 0;

                        color: var(--black);

                        transition: 200ms all ease-in-out;
                    }
                }

                li:hover:after{
                    content: " ";
                    height: 1px;
                    width: 100%;
                    display: block;
                    background: var(--black);
                   
                    
                }
                
            }
        }

        img{
            display: none;
            cursor: pointer;

            @media(max-width: 900px){
                display: flex;
            }
        }



    }

`