import styled, { css } from "styled-components";

export const HomeContainer = styled.main`
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

export const PostsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  gap: 2rem;
`;

export const SearchForm = styled.form`
  width: 100%;

  & div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    & p {
      color: ${({ theme }) => theme.colors["base-span"]};
      font-size: ${({ theme }) => theme.fonts.sizes.small2};
    }

    & h4 {
      color: ${({ theme }) => theme.colors["base-title"]};
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }
  }

  & input {
    width: 100%;
    border-radius: 6px;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors["base-title"]};
    background-color: ${({ theme }) => theme.colors["base-input"]};
    border: 1px solid ${({ theme }) => theme.colors["base-border"]};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};

    &::placeholder {
      color: ${({ theme }) => theme.colors["base-border"]};
    }
  }

  margin-bottom: 4rem;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 2rem;
  padding: 3rem;
  margin-bottom: 3rem;

  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors["base-profile"]};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

  & img {
    width: 14.8rem;
    height: 14.8rem;
    border-radius: 8px;
  }

  & p {
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const ProfileTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & h3 {
    font-size: 24px;
    color: ${({ theme }) => theme.colors["base-title"]};
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

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  & span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: ${({ theme }) => theme.fonts.sizes.small3};
    color: ${({ theme }) => theme.colors["base-subtitle"]};
    line-height: 0;

    & svg {
      color: ${({ theme }) => theme.colors["base-label"]};
      font-size: ${({ theme }) => theme.fonts.sizes.medium};
    }
  }
`;
