import styled from "styled-components";

export const StyledCenter = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    padding: ${({ isAvoidHeader }: { isAvoidHeader?: boolean }) => (isAvoidHeader ? "8rem 1rem 1rem 1rem" : "1rem")};
`;

export default StyledCenter;
