import styled from "styled-components";

export const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 50px;
    position: relative;

    .titleProject {
        width: auto;
        margin-top: 0 auto;
        text-align: center;
    }

    .containerProjects {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 4px;
        z-index: 10;

        div {
            display: flex;
            justify-content: center;
            img {
                width: 35vw;
                max-width: 300px;
            }
        }

        .project {
            cursor: pointer;
            transition: 0.3s ease-in;
        }
        .project:hover {
            transform: scale(1.02);
        }
    }

    .square {
        position: absolute;
        left: 0;
        bottom: 0px;
        z-index: -10;
    }
    @media (min-width: 1060px) {
        /* flex-direction: row; */
        justify-content: space-between;
        align-items: center;
        min-height: 100vh;

        .titleProject {
            color: yellow;
            margin-top: 150px;
        }

        .containerProjects {
            display: flex;
            flex-direction: row;
            max-width: 1200px;
        }
    }
`;
