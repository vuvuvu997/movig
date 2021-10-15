import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`
  * {
  -webkit-font-smoothing: antialiased;
  box-sizing:border-box;
  }
  h5, h4, h3, h2, h1 {
    font-family: "Libre Caslon Text";
  }
  ::selection {
    background: #D2D9E2;
    color: #204370;
  }
  ::-moz-selection {
    background: #D2D9E2;
    color: #204370;
  }
  ::-webkit-selection {
    background: #D2D9E2;
    color: #204370;
  }
  a{
    text-decoration: none;
    line-height:inherit;
    font-size:inherit;
    color:inherit;
    display:inline-block;
  }
  /*
  * Globals
  */
  body {
    color: #161637;
    font-family: 'Libre Franklin';
    font-size: 14px;
    line-height: 22px;
    font-weight: 400;
  }
  @media (max-width: 650px) {
    .react-reveal {
      opacity: 1 !important; 
    }
  }


  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }
  img {
    width:100%;
    height:100%;
    object-fit:contain;
  }
`;
