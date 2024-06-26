import { createGlobalStyle } from 'styled-components' //import the function createGlobalStyle from styled components. This function was added with () 

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
    
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased


  }

  body, input, button, textarea {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 16px;
    font-style: normal;
    outline: none;

  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`