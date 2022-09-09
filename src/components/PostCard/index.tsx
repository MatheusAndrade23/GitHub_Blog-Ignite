import { PostCardContainer } from "./styles";

export const PostCard = () => {
  return (
    <PostCardContainer onClick={() => (window.location.href = "/")}>
      <div>
        <h3>JavaScript data types and data structures</h3>
        <span>Há 1 dia</span>
      </div>
      <p>
        Programming languages all have built-in data structures, but these often
        differ from one language to another. This article attempts to list the
        built-in data structures available in...
      </p>
    </PostCardContainer>
  );
};
