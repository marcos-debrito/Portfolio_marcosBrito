import styled from "styled-components";

export const LandingPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    padding: 2.5rem 0;
    max-width: 1200px;
    height: 100%;
    margin: 30px auto;
    padding: 0 50px;

    .containerImage {
        justify-content: center;
        flex-basis: 60%;
        z-index: 10;
        margin-top: 7rem;

        figure {
            max-width: 33rem;
            margin: 0 auto;

            img {
                background: var(--c-primary);
                padding-top: 1rem;
                border-radius: 30% 0px;
                border: 1px solid white;
                width: 100%;
                cursor: pointer;
            }
        }
    }

    .containerTexts {
        z-index: 30;
        flex-basis: 0.5rem;
        margin-top: 3rem;

        div {
            text-align: center;
            font-size: 1rem;

            .title {
                flex-wrap: wrap;
                font-size: 2.2rem;

                z-index: 10;

                display: block;

                span {
                    color: var(--c-secondary);
                }
            }
        }

        .containerActions {
            display: flex;
            margin-top: 5px;
            justify-content: center;
        }
    }

    .square {
        width: 60vw;
        overflow: hidden;
        position: absolute;
        bottom: 0;
        right: 0;
        z-index: 0;
    }

    @media (min-width: 1060px) {
        flex-direction: row;

        align-items: center;
        height: 100vh;

        .containerImage {
            order: 2;
            max-width: 500px;
            margin-top: 1rem;
        }

        .containerTexts {
            margin-top: 2rem;

            div {
                text-align: start;
                .title {
                    text-align: start;
                    width: 550px;
                }
            }

            .containerActions {
                justify-content: start;
            }
        }
    }
`;

export const AnchorDownload = styled.div`
    display: flex;
    margin-top: 1rem;

    a {
        width: 150px;
        border: 1px solid transparent;
        padding: 10px;
        text-align: center;
        background: var(--c-secondary);
    }

    .download {
        background: var(--c-primary);
        border: 1px solid white;
        transition: 0.4s ease-in-out;
    }

    .download:hover {
        border: 1px solid var(--c-secondary);
    }
`;
