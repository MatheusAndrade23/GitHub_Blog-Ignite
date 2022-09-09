import styled, { css } from "styled-components";

export const PostCardContainer = styled.div`
  width: 41.6rem;
  height: 26rem;
  cursor: pointer;

  padding: 3rem;
  border-radius: 5px;

  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.colors["base-post"]};

  & div {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  & h3 {
    width: 25rem;
    color: ${({ theme }) => theme.colors["base-title"]};
    font-size: ${({ theme }) => theme.fonts.sizes.medium2};
  }

  & span {
    min-width: max-content;
    margin-top: 0.6rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.fonts.sizes.small2};
  }

  & p {
    margin-top: 3rem;
    color: ${({ theme }) => theme.colors["base-text"]};
    font-size: ${({ theme }) => theme.fonts.sizes.small3};
  }

  &:hover {
    transition: 0.5s;
    border: 2px solid ${({ theme }) => theme.colors["base-label"]};
  }
`;