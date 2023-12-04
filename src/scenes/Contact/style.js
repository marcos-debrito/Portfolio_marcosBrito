import styled from "styled-components";

export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1500px;
    min-height: 100vh;
    margin: 0 auto;
    position: relative;

    .ContactContainer {
        margin: 0 auto;
        width: 80vw;
        max-width: 500px;
        background: #091034;

        form {
            width: 80%;
            max-width: 300px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 10px;
            align-items: center;
            padding: 30px 0px;

            div {
                width: 100%;
                .name,
                .email {
                    background-color: #afbaf1;
                    padding: 20px 0;
                    display: flex;
                    justify-content: center;

                    min-width: 90%;
                    padding: 20px 12px;

                    border: 1px solid transparent;
                }
                .text {
                    all: unset;
                    resize: none;
                    min-width: 90%;
                    height: 200px;
                    background-color: #afbaf1;
                    padding: 5px 12px;
                    color: white;
                    border: 1px solid transparent;
                }
                .name::placeholder,
                .email::placeholder,
                .text::placeholder {
                    color: white;
                }

                .name:hover,
                .email:hover,
                .text:hover {
                    border: 1px solid white;
                }
                span {
                    color: red;
                    font-size: 13px;
                }
                .sendMessage {
                    font-weight: bold;
                    font-family: var(--font-primary);
                    background: #df6a6a;
                    color: white;
                    padding: 15px 10px;
                    width: 100%;
                    transition: 0.3s ease;
                }
                .sendMessage:hover {
                    transform: scale(1.03);
                }
            }
        }
    }

    .squareLeft {
        overflow: hidden;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 0;
    }

    .squareRight {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 0;
    }

    @media (min-width: 650px) {
        margin: 200px auto;
    }

    @media (min-width: 1060px) {
        height: 100vh;
    }
`;
