import { createGlobalStyle } from 'styled-components';
/* istanbul ignore next */
import LibreCaslonText from '../fonts/LibreCaslonText-Regular.ttf';
import LibreFranklin from '../fonts/LibreFranklin-VariableFont_wght.ttf';
export const FontStyle = createGlobalStyle`
  @font-face {
    font-family: "Libre Caslon Text";
    src: url(${LibreCaslonText});
  }
  @font-face {
      font-family: "Libre Franklin";
      src: url(${LibreFranklin});
  }
`;
