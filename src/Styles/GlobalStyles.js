import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --font-primary: "Comfortaa", sans-serif;
    --font-secondary: "Open Sans", sans-serif;

    --c-primary: #010026;   /* Azul escuro */
    --c-secondary: #DF6A6A; /* Salmão */
    --c-blue: #2CBCE9;
    --c-red: #DC4492;
    --c-yellow: #FDCC49;
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

.animation {
    transition: 0.3s ease-in-out;
    text-decoration: none
}

.animation:hover{
    color: var(--c-secondary)
} 

.início, .habilidades, .projetos, .contato{
    color: var(--c-secondary)
}
/* 
.habilidades{
    color: var(--c-secondary)
}

.projetos{
    color: var(--c-secondary)
}

.contato{
    color: var(--c-secondary)
} */

.DotStyle{
    width: 80%;
    margin: 0 auto;
    height: 100%
}
`;

/* 
font-family: 'Comfortaa', sans-serif;
font-family: 'Open Sans', sans-serif;

*/
