import styled, { css } from "styled-components";

export const PostContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 110rem;
  margin: 0 auto;

  padding: 2rem 4rem;
  margin-top: -7rem;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  margin-bottom: 3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  & p {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
  }

  & h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors["base-title"]};
  }

  & > div:first-child {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & a {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ theme }) => theme.fonts.sizes.small};
    text-decoration: underline;

    & svg {
      margin-left: 0.5rem;
    }
  }
`;

export const Content = styled.p`
  padding: 0 2rem;
  color: ${({ theme }) => theme.colors["base-title"]};

  a {
    color: ${({ theme }) => theme.colors.blue};
  }

  p {
    margin: 1rem 0;
  }

  h1,
  h2,
  h3 {
    margin-bottom: 2rem;
  }
`;
