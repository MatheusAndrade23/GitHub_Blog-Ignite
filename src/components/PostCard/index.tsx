import { PostCardContainer } from "./styles";

import { PostType } from "../../pages/Home";
import { getDistance } from "../../utils/formatDate";

export const PostCard = ({ title, body, created_at, number }: PostType) => {
  return (
    <PostCardContainer
      onClick={() => (window.location.href = `/post/${number}`)}
    >
      <div>
        <h3>{title}</h3>
        <span>{"Há " + getDistance(created_at)}</span>
      </div>
      <p>{body}</p>
    </PostCardContainer>
  );
};
