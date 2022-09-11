import { PostCardContainer } from "./styles";

import { PostType } from "../../pages/Home";
import { getDistance } from "../../utils/formatDate";

import ReactMarkdown from "react-markdown";

export const PostCard = ({ title, body, created_at, number }: PostType) => {
  const preview = body.split(" ", 15).join(" ").concat("...");

  return (
    <PostCardContainer
      onClick={() => (window.location.href = `/post/${number}`)}
    >
      <div>
        <h3>{title}</h3>
        <span>{"Há " + getDistance(created_at)}</span>
      </div>
      <div>
        <ReactMarkdown>{preview}</ReactMarkdown>
      </div>
    </PostCardContainer>
  );
};
