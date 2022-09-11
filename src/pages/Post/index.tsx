import { PostContainer, Card, Content } from "./styles";

import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import ReactMarkdown from "react-markdown";

import { BsBoxArrowInUpRight, BsBoxArrowInLeft } from "react-icons/bs";
import { ProfileInfo } from "../Home/styles";
import { AiFillCalendar, AiFillGithub } from "react-icons/ai";
import { GoComment } from "react-icons/go";

import { PostType } from "../Home";

import { api } from "../../services/api";

import { getDistance } from "../../utils/formatDate";

export const Post = () => {
  const { postNumber } = useParams();
  const [post, setPost] = useState<PostType>({} as PostType);

  useEffect(() => {
    (async () => {
      try {
        const issue = await api.get(
          `/repos/matheusAndrade23/GitHub_Blog-Ignite/issues/${postNumber}`
        );
        setPost(issue.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const {
    html_url,
    comments,
    created_at = new Date(),
    body,
    user,
    title,
  } = post;

  return (
    <PostContainer>
      <Card>
        <div>
          <a href="/">
            <BsBoxArrowInLeft />
            Voltar
          </a>
          <a href={html_url}>
            Ver no Github <BsBoxArrowInUpRight />
          </a>
        </div>
        <h3>{title}</h3>
        <ProfileInfo>
          <span>
            <AiFillGithub />
            {user?.login}
          </span>
          <span>
            <AiFillCalendar />
            {"Há " + getDistance(created_at)}
          </span>
          <span>
            <GoComment />
            {comments}
          </span>
        </ProfileInfo>
      </Card>
      <Content>
        <ReactMarkdown>{body}</ReactMarkdown>
      </Content>
    </PostContainer>
  );
};
