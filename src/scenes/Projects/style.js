import styled from "styled-components";

export const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 50px;

    @media (min-width: 1060px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100vh;
    }
`;
