import styled from 'styled-components'

export const Container = styled.section `
    background: var(--bg-black)

`

export const Content = styled.div `
    width: 100%;
    max-width: 940px;
    margin: 0 auto;

    padding: 4.7rem 0;

    ul{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        img{
            transition: 200ms all ease-in-out;
        }

        img:hover{
            transform: scale(1.1);
        }
    }
    }


`