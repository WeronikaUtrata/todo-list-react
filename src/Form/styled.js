import styled from "styled-components";

export const FormContainer = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid hsl(0deg 0% 75%);
    border-radius: 5px;
    font-size: 18px;
`;

export const Button = styled.button`
    color: white;
    background: teal;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    transition: 0.5s;

    &:hover {
        filter: brightness(130%);
        cursor: pointer;
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(150%);
    }
`;

