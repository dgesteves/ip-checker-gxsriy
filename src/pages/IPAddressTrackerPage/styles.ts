import styled from "styled-components";

export const StyledMapFallback = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
`;

export const StyledMapFallbackText = styled.p`
  background-color: ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.sizes.s8} ${({ theme }) => theme.sizes.s16};
  border-radius: ${({ theme }) => theme.sizes.s8};
  font-size: ${({ theme }) => theme.sizes.s24};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => `calc(${theme.sizes.s100}*3)`};
  }
`;
