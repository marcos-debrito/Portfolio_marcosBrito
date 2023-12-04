import styled from "styled-components";

export const SkillSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1500px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 0 50px;
    flex-wrap: wrap;
    align-content: center;
    position: relative;

    .left {
        display: flex;
        flex-direction: column;
        text-align: center;

        max-width: 500px;
        margin-top: 100px;
        gap: 2rem;
        z-index: 30;

        .Colorized {
            background: var(--c-secondary);
            padding: 30px 0px;
            align-items: center;
            text-align: center;
        }
    }
    .right {
        margin-top: 50px;
        max-width: 500px;
        background: #091034;
        z-index: 5;
    }

    .square {
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
    }

    @media (min-width: 1060px) {
        gap: 2rem;
        align-items: center;
        height: 100vh;

        .left {
            max-width: 30vw;
        }
    }
`;
