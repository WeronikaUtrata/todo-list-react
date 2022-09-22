import styled, { css } from "styled-components";

export const TasksList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    font-size: 18px;
`;

export const Item = styled.li`
    display:grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid rgb(237, 237, 237);
    word-break: break-word;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    padding: 0;
    transition: 0.5s;

    ${({ toggleDone }) => toggleDone && css`
        background: hsl(120, 97%, 29%);
        border-radius: 3px;

        &:hover {
            background: hsl(120, 86%, 46%);
            cursor: pointer;
        }

        &:active {
            background: hsl(120, 100%, 65%);
        }
    `}

    ${({ remove }) => remove && css`
        background: hsl(0, 100%, 36%);
        border-radius: 3px;

        &:hover {
            background: hsl(0, 83%, 30%);
            cursor: pointer;
        }

        &:active {
            background: hsl(0, 85%, 66%);
        }
    `}
`;