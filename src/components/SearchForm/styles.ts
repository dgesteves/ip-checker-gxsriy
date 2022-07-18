import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ theme }) => `calc(${theme.sizes.s100}*5)`};
  height: ${({ theme }) => theme.sizes.s44};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: ${({ theme }) => `calc(${theme.sizes.s100}*3)`};
    touch-action: manipulation;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  border-top-left-radius: ${({ theme }) => theme.sizes.s8};
  border-bottom-left-radius: ${({ theme }) => theme.sizes.s8};
  padding: ${({ theme }) => theme.sizes.s16};
  font-size: ${({ theme }) => theme.sizes.s18};
  outline: none;
`;

export const StyledButton = styled.button`
  height: 100%;
  width: ${({ theme }) => theme.sizes.s44};
  border: none;
  outline: none;
  border-top-right-radius: ${({ theme }) => theme.sizes.s8};
  border-bottom-right-radius: ${({ theme }) => theme.sizes.s8};
  background-color: ${({ theme }) => theme.colors.very_dark_gray};
  cursor: pointer;
  transition: all 0.4s ease-in-out;

  :hover {
    width: ${({ theme }) => theme.sizes.s64};
  }
`;

export const StyledErrorMessage = styled.p`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.sizes.s18};
  font-weight: 500;
  text-shadow: 0 0 80px rgb(192 219 255 / 35%), 0 0 32px rgb(65 120 255 / 24%);
`;
