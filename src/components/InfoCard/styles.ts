import styled from "styled-components";

export const StyledInfoCard = styled.section`
  position: absolute;
  bottom: -15%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => `calc(${theme.sizes.s100}*10)`};
  height: ${({ theme }) => theme.sizes.s100};
  border-radius: ${({ theme }) => theme.sizes.s8};
  padding: ${({ theme }) => theme.sizes.s24};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width: ${({ theme }) => `calc(${theme.sizes.s100}*3)`};
    height: ${({ theme }) => `calc(${theme.sizes.s100}*3)`};
    bottom: -55%;
  }
`;

export const StyledInfoCardElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.sizes.s8};

  :not(:first-child) {
    border-left: 1px solid ${({ theme }) => theme.colors.gray};
    padding-left: ${({ theme }) => theme.sizes.s18};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    align-items: center;
    :not(:first-child) {
      border-left: none;
      padding-left: 0;
    }
  }
`;

export const StyledInfoCardElementTitle = styled.h4`
  font-size: ${({ theme }) => theme.sizes.s12};
  font-weight: 500;
  text-transform: uppercase;
`;

export const StyledInfoCardElementValue = styled.h3`
  color: ${({ theme }) => theme.colors.very_dark_gray};
  font-size: ${({ theme }) => theme.sizes.s18};
  text-align: center;
`;
