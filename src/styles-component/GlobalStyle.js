import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;

}
body {
  background: #EEE;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
`;
export default GlobalStyled;
