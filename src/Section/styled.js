import styled from "styled-components";

export const StyledSection = styled.section`
    margin: 10px 0;
    background: white;
    border-radius: 5px;
    box-shadow: 1px 1px 2px rgb(198, 194, 194);
`;

export const StyledHeader = styled.header`
    border-bottom: 2px solid #ddd;
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;    

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const StyledTitle = styled.h2`
    font-size: 20px;
    padding: 20px;
    margin: 0;
`;

export const SectionBody = styled.div`
    padding: 20px;
`;