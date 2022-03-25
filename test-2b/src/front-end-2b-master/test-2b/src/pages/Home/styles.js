import styled from 'styled-components'


export const Container = styled.div `
    width: 100%;
`

export const Content = styled.div `
    width: 100%;
`


export const Main = styled.main `
    width: 100%;

    .features{
        width: 100%;
    }

    .features__container{
        width: 100%;
        max-width: 940px;

        display: flex;
        flex-direction: column;
        gap: 5.5rem;

        margin: 0 auto;

        padding: 7.25rem 1rem 10.25rem;

        @media(max-width: 900px){
            padding: 3.5rem 1rem;
            gap: 3rem;  
        }

        .features__container-title{
            width: 100%;

            h2{
                font-size: clamp(1.25rem, 1.0761rem + 0.8696vw, 2rem);
                line-height: 2rem;
                font-weight: 700;

                text-align: center;

                margin-bottom: 1rem;

                color: var(--black);
            }

            p{
                width: 100%;
                max-width: 760px;
                margin: 0 auto;

                font-size: clamp(0.85rem, 0.7572rem + 0.4638vw, 1.25rem);
                line-height: 1.5rem;
                font-weight: 400;
            
                text-align: center;

                color: var(--black-medium);
            }
        }

        .features__container-show1,
        .features__container-show2{
            width: 100%;
            max-width: 920px;

            margin: 0 auto;

            display: flex;
            gap: 2.75rem;

            @media(max-width: 900px){
                align-items: center;
            }

            img{
                @media(max-width: 900px){
                    width: 100%;
                    max-width: 60px;
                }
            }

            @media(max-width: 900px){
                flex-direction: column;
            }

            .features-item{
                width: 100%;
                max-width: 290px;

                display: flex;
                gap: 2rem;

                img{
                    @media(max-width: 900px){
                        width: 100%;
                        max-width: 100px;
                    }
                }


                .description{
                    h3{
                        font-size: clamp(1rem, 0.9130rem + 0.4348vw, 1.375rem);
                        line-height: 1.5rem;
                        font-weight: 400;
                
                        margin-bottom: 1rem;
                        
                        color: var(--black);

                        @media(max-width: 900px){
                            flex-direction: column;
                        }
                    }

                    p{
                        font-size: clamp(0.85rem, 0.8152rem + 0.1739vw, 1rem);
                        line-height: 1.25rem;
                        font-weight: 400;
                        
                        color: var(--grey);

                        @media(max-width: 900px){
                            flex-direction: column;
                        }
                    }
                }
            }
        }
    }



`