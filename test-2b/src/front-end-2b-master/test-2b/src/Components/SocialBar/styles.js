import styled from 'styled-components'

export const Container = styled.section `
    background: var(--bg-black)

`

export const Content = styled.div `
    width: 100%;
    max-width: 940px;
    margin: 0 auto;

    padding: 4.7rem 0;

    @media(max-width: 900px){
        padding: 3.5rem 0;
    } 

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        img{
            transition: 200ms all ease-in-out;

            @media(max-width: 900px){
                width: 80%;
            } 
        }

        img:hover{
            transform: scale(1.1);
        }
    }
    }


`