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

    @media(max-width: 900px){
        padding: 0 1rem 3.5rem;
    }

    /* CAROUSEL */
    .control-arrow{
        display: none;
    }

    .carousel-status{
        display: none;
    }

    .carousel-slider{
        padding: 2rem 0;
        overflow: visible;
    }

    .carousel .control-dots{
        top: 580px;

        @media(max-width: 900px){
            top: 800px;
        }
    }

    .carousel .control-dots .dot{
        background: var(--white);

        border: 1px solid var(--white);

        box-shadow: none;

        padding: .5rem;

        @media(max-width: 900px){
            padding: 0.25rem;
        }
        
    }
    /* CAROUSEL */

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

            display: flex;
            flex-direction: column;
            

            @media(max-width: 900px){
                display: flex;
                flex-direction: column;
                align-items: center;

                margin-top: 2rem;
            }

            h2{
                font-size: clamp(1.50rem, 1.0576rem + 0.9620vw, 2rem);
                line-height: 2rem;
                font-weight: 700;

                color: var(--black);

                margin-bottom: 1.375rem;

                text-align: left;

            }

            h3{

                width: 100%;
                max-width: 309px;

                font-size: clamp(1rem, 0.9494rem + 0.2532vw, 1.25rem);
                line-height: 1.5rem;
                font-weight: 400;

                color: var(--black-medium);

                margin-bottom: 1.375rem;

                text-align: left;

                @media(max-width: 900px){
                    text-align: center;
                }
            }
                
            p{
                font-size: clamp(0.75rem, 0.6994rem + 0.2532vw, 1rem);
                line-height: 1.25rem;
                font-weight: 400;

                color: var(--black-light);

                margin-bottom: 2.43rem;

                text-align: left;

                @media(max-width: 900px){
                    text-align: center;

                    width: 70%;
                }
            }

            .description-system{
                ul{
                    display: flex;
                    align-items: center;
                    gap: 2.375rem;

                    img{

                        @media(max-width: 900px){
                            width: 80%;
                        } 
                    }
                }
            }
        }

        .slider-img{
            img{
                @media(max-width: 900px){
                width: 90%; 

                display: flex;
                margin: 0 auto;

                }
            }
        }
        
    }
    

    /* @media(max-width: 900px){
                display: flex;
                flex-direction: column;
                align-items: center;

                margin-top: 2rem;
            }
 */
`