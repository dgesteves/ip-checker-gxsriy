import styled from "styled-components";

export const StyledHeader = styled.header<{ img: string }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.sizes.s24};
  height: 30vh;
  padding: ${({ theme }) => theme.sizes.s24};
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const StyledHeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.sizes.s28};
  font-weight: 500;
}
  `;
