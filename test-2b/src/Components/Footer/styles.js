import styled from 'styled-components'

export const Container = styled.section `
    background: var(--black);

    .toTop{
        width: 100%;

        display: flex;
        justify-content: flex-end;

        padding: 0 6rem 6rem;

        @media(max-width: 900px){
            padding: 0 2rem 6rem;
        }

        img{
            width: 100%;
            max-width: 60px;
            
            cursor: pointer;
        }
    }
`

export const Content = styled.div `
    width: 100%;
    max-width: 840px;
    margin: 0 auto;

    padding: 4rem 1rem 4rem;
    
    display: flex;
    align-items: flex-start;
    gap: 7.75rem;

    @media(max-width: 900px){
        flex-direction: column; 
        align-items: center;
        gap: 2rem;  
        
        padding: 4rem 1rem 2rem;
    }


    .company-information{
        width: 100%;
        max-width: 185px;

        @media(max-width: 900px){
            text-align: center;   
        }
        

        p, a{
            font-size: 1rem;
            line-height: 1.25rem;
            font-weight: 400;

            color: var(--white);
        }

        a{
            display: block;
            transition: 200ms all ease-in-out;

            @media(max-width: 900px){
                padding: .75rem 0;  
            }
        }

        a:hover{
            color: var(--yellow);
        }

        .adrees-margin{
            margin-bottom: .5rem;
        }
    }

    .footer-interaction{
        width: 100%;
        max-width: 530px;

        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        @media(max-width: 900px){
            flex-direction: column;
            align-items: center;
             
            gap: 2rem;    
        }

        .interaction-item{
            @media(max-width: 900px){
                text-align: center;   
            }

            li{
                @media(max-width: 900px){
                    padding: .75rem;   
                }

                a{
                font-size: 1rem;
                line-height: 1.25rem;
                font-weight: 400;

                color: var(--white);
                transition: 200ms all ease-in-out;

                }

                a:hover{
                    color: var(--yellow);
                }
            }
        } 
    }

    
`