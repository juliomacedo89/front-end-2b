import styled from 'styled-components'
    

export const Container = styled.section `
    width: 100%;
    background: var(--bg-black);
`

export const Content = styled.div `
    width: 100%;
    max-width: 940px;
    margin: 0 auto;

    padding: 6.4rem 1rem 0;

    h2{
        font-size: 2.5rem;
        line-height: 2rem;
        font-weight: 700;
        
        text-align: center;

        margin-bottom: 1rem;

        color: var(--yellow);
    }

    p{
        width: 100%;
        max-width: 760px;
        margin: 0 auto;

        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 400;

        text-align: center;
        
        margin-bottom: 2.5rem;

        color: var(--grey);         
    }

    .input-group{
        width: 100%;
        max-width: 730px;
        margin: 0 auto;

        display: flex;
        align-items: center;
      
        gap: 1.25rem;

        label{
            width: 100%;
            max-width: 580px;
        }

        input{
            width: 100%;
            max-width: 580px;

            padding: 1rem 2rem;

            border: 0;
            border-radius: 5px;            

        }

        input::placeholder{
            font-size: 1rem;
            line-height: 1.25rem;            
            font-weight: 400;

            color: var(--grey);
        }

        input:focus{
            outline: none;
        }

        button{
            width: 100%;
            max-width: 128px;

            border: 2px solid var(--black);
            border-radius: 5px;

            padding: .81rem 2rem;

            background: var(--yellow);

            font-size: 1rem;
            line-height: 1.5rem;
            font-weight: 700;

            text-transform: uppercase;

            color: var(--black);

            transition: 200ms all ease-in-out;
        }

        button:hover{
            border: 2px solid var(--yellow);
            color: var(--white);
            background: var(--black);
        }

    }

`