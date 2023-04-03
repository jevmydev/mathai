import styled from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background: #171717;
    padding: 0.5rem 1rem;
    border-radius: 0.75rem;
    transition: background 150ms;
    border: 1px solid #404040;

    &:hover {
        background: #262626;
    }
`;

export default StyledButton;
