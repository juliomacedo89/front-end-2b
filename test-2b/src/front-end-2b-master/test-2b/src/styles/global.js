// Global configs.

import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --bg-yellow: #fcdb00;
        --bg-black: #010101;

        --yellow: #fcdb00;
        --black: #010101;
        --black-medium: #313841;
        --black-light: #555555;
        --grey: #898989;
        --white: #FFFFFF
    } 
    
    *{
       margin: 0;
       padding: 0;
       box-sizing: border-box ;
    }

    body{
        
        -webkit-font-smoothing: antialiased;
        
    }

    body, input, textarea, button {
        font-family: 'PT Sans', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h5, strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    [disabled] { 
        opacity: 0.6;
        cursor: not-allowed; 
    }
    
`