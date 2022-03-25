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

    @media(max-width: 900px){
        padding: 3.5rem 1rem 0;  
    }

    h2{
        font-size: clamp(1.5rem, 1.2681rem + 1.1594vw, 2.5rem);
        line-height: 2,5rem;
        font-weight: 700;
        
        text-align: center;

        margin-bottom: 1rem;

        color: var(--yellow);
    }

    p{
        width: 100%;
        max-width: 760px;
        margin: 0 auto;

        font-size: clamp(0.85rem, 0.7572rem + 0.4638vw, 1.25rem);
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

        @media(max-width: 900px){
            flex-direction: column;
        }

        label{
            width: 100%;
            max-width: 580px;
        }

        input{
            width: 100%;
            max-width: 580px;
            min-width: 270px;

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
            width: clamp(5.5rem, 4.9203rem + 2.8986vw, 8rem);
            height: clamp(2.5rem, 2.1522rem + 1.7391vw, 3.3rem);

            border: 2px solid var(--black);
            border-radius: 5px;

            padding: 0 .81rem;

            background: var(--yellow);

            font-size: clamp(0.75rem, 0.6920rem + 0.2899vw, 1rem);
            
            font-weight: 700;

            text-transform: uppercase;
            text-align: center;

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