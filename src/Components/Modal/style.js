import { styled } from "styled-components";

export const ModalOverlay = styled.div`
    background-color: transparent;
    position: fixed;
    margin: 0;
    padding: 0;
    z-index: 99;
    display: flex;
    align-items: center;
    justify-content: center;

    inset: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(4px);

    .modalBox {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        width: 80%;
        max-width: 31.25rem;
        background: #d6d6d6;
        margin: 0.9375rem;
        min-height: 300px;

        .left {
            background: #091034;
            text-align: center;
        }

        .right {
            color: black;
            text-align: center;
            padding: 15px;

            P {
                display: flex;
                flex-wrap: wrap;
                margin-bottom: 40px;
            }

            .containerButton {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-bottom: 20px;

                a {
                    background: #091034;
                    color: white;
                    font-size: bold;
                    width: 80%;
                    margin: 0 auto;
                    height: 40px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
    }

    @media (min-width: 1060px) {
        .modalBox {
            flex-direction: row;
            min-height: 400px;
            min-width: 600px;

            .left {
                min-width: 250px;
                display: flex;
                align-items: center;

                p {
                    font-size: 30px;
                    font-weight: bold;
                    text-align: start;
                    padding: 0 30px;
                }
            }

            .right {
                margin-top: 60px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                min-width: 300px;
                .containerButton {
                    a {
                        width: 100%;
                    }
                }

                .closeIcon {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    transition: 0.3s ease-in-out;
                    cursor: pointer;
                    padding: 5px;
                }
            }
        }
    }
`;
