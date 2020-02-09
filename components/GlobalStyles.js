import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
  }

  button {
    border: none;
    &:focus {
      outline: none;
      border: none;
    }
  }

  input {
    border: none;
    &:focus {
      outline: none;
    }
  }
`;
export default GlobalStyles;
