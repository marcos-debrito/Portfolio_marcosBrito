import styled from "styled-components";

export const ContainerRight = styled.div`
    text-align: center;
    padding: 10px 0px;
`;

export const ContainerTechs = styled.div`
    display: flex;

    flex-wrap: wrap;
    max-width: 550px;
    gap: 1.5rem;
    align-items: center;
    justify-content: center;
    padding: 20px 50px;

    div {
        .logo {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            cursor: pointer;
            transition: 0.3s ease-in-out;

            span {
                opacity: 0;
                transition: 0.3s ease-in-out;
            }
        }
        .logo:hover {
            transform: scale(1.05);

            span {
                opacity: 1;
            }
        }
    }

    @media (min-width: 600px) {
        gap: 3rem;
    }
`;
