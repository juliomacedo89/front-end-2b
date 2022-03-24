import styled from 'styled-components'

export const Container = styled.section `
    width: 100%;
    background: var(--yellow);
`

export const Content = styled.div `
    width: 100%;
    max-width: 1075px;
    margin: 0 auto;

    padding: 0 1rem 6.75rem;

    .interaction-slider{
        display: flex;
        gap: 11.375rem;

        @media(max-width: 900px){
            flex-direction: column;
            align-items: center;
            gap: 1.5rem;
        }

        .description{
            width: 100%;
            max-width: 395px;
            min-width: 350px;
            
            margin-top: 4rem;

            @media(max-width: 900px){
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            h2{
                font-size: 2rem;
                line-height: 2rem;
                font-weight: 700;

                color: var(--black);

                margin-bottom: 1.375rem
            }

            h3{

                width: 100%;
                max-width: 309px;

                font-size: 1.25rem;
                line-height: 1.5rem;
                font-weight: 400;

                color: var(--black-medium);

                margin-bottom: 1.375rem;

                @media(max-width: 900px){
                    text-align: center;
                }
            }
                
            p{
                font-size: 1rem;
                line-height: 1.25rem;
                font-weight: 400;

                color: var(--black-light);

                margin-bottom: 2.43rem;

                @media(max-width: 900px){
                    text-align: center;

                    width: 70%;
                }
            }

            
        }

        .description-system{
            ul{
                display: flex;
                align-items: center;
                gap: 2.375rem;
            }
        }
    }
    



`