import styled from "styled-components";

export const ProjectSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    min-height: 100vh;
    margin: 0 auto;
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
        max-width: 720px;
        margin: 0 auto;

        div {
            display: flex;
            justify-content: center;

            img {
                width: 35vw;
                max-width: 200px;
                max-height: 250px;
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
        align-items: center;
        min-height: 100vh;

        .titleProject {
            margin-top: 150px;
        }

        .containerProjects {
            display: flex;
            flex-direction: row;
        }
    }
`;
