import { styled } from "styled-components";

export const SocialMediaContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 2rem;
    cursor: pointer;

    @media (min-width: 1060px) {
        justify-content: start;
    }
`;
