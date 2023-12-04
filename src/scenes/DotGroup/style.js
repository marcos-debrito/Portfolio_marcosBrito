import styled from "styled-components";

export const DotContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    top: 60%;
    right: 1.75rem;
    z-index: 20;

    a {
        height: 10px;
        width: 10px;
        background: white;
        border-radius: 100%;
        border: 0.5px solid transparent;
    }

    .início,
    .habilidades,
    .projetos,
    .contato {
        background: var(--c-secondary);
        border: 1px solid white;
    }

    .nonSelected {
        background: #757575;
    }
`;
