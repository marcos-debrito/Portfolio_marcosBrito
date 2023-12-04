import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --font-primary: "Comfortaa", sans-serif;
    --font-secondary: "Open Sans", sans-serif;

    --c-primary: #010026;   
    --c-secondary: #DE971D; 
    --c-blue: #2CBCE9;
    --c-red: #DC4492;
    --c-yellow: #FDCC49;
    --backgorund-menu-mobile: #EBDECA;
}



html {
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
}

body,html{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: var(--font-primary);
    color: white
}

body,html, :root {
    background-color: var(--c-primary);
    height: 100%;
}

body, button{
    border: none;
    outline: none;
}

button {
    cursor: pointer
}

a{
    color: white;
    text-decoration: none;
}

h1{
    font-size: 36px;
}

input{
    all: unset;
}

section {
    margin-bottom: 100px;
}

.animation {
    transition: 0.3s ease-in-out;
    text-decoration: none;
    font: bold;
}

.animation:hover{
    color: var(--c-secondary)
} 

.início, .habilidades, .projetos, .contato{
    color: var(--c-secondary)
}

.DotStyle{
    width: 80%;
    margin: 0 auto;
    height: 100%
}

body::-webkit-scrollbar {
  width: 2px; 
}

body::-webkit-scrollbar-thumb {
  background-color: var(--c-secondary); 
  border-radius: 2px; 
}

body::-webkit-scrollbar-track {
  background-color: var(--c-primary); 
}
`;
