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

        .features__container-title{
            width: 100%;

            h2{
                font-size: 2rem;
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

                font-size: 1.25rem;
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

            .features-item{
                width: 100%;
                max-width: 275px;

                display: flex;
                gap: 2rem;

                .description{
                    h3{
                        font-size: 1.375rem;
                        line-height: 1.5rem;
                        font-weight: 400;
                
                        margin-bottom: 1rem;
                        
                        color: var(--black);
                    }

                    p{
                        font-size: 1rem;
                        line-height: 1.25rem;
                        font-weight: 400;
                        
                        color: var(--grey);
                    }
                }
            }
        }
    }



`