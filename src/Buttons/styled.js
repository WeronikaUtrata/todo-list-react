import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 20px;
`;

export const Button = styled.button`
    background: transparent;
    color: teal;
    border: none;
    transition: 0.5s;

    @media (max-width: 767px) {
        flex-basis: 100%;
        margin: 10px;
    }

    &:hover {
        filter: brightness(130%);
        cursor: pointer;
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;