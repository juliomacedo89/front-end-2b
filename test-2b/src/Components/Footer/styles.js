import styled from 'styled-components'

export const Container = styled.section `
    background: var(--black);
`

export const Content = styled.div `
    width: 100%;
    max-width: 840px;
    margin: 0 auto;

    padding: 4rem 1rem 9rem;
    
    display: flex;
    align-items: flex-start;
    gap: 7.75rem;


    .company-information{
        width: 100%;
        max-width: 185px;

        p, a{
            font-size: 1rem;
            line-height: 1.25rem;
            font-weight: 400;

            color: var(--white);
        }

        a{
            display: block;
            transition: 200ms all ease-in-out;
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

        a{
            font-size: 1rem;
            line-height: 1.25rem;
            font-weight: 400;

            color: var(--white)
;           transition: 200ms all ease-in-out;
        }

        a:hover{
            color: var(--yellow);
        }
    }
`