import {
  HomeContainer,
  PostsContainer,
  SearchForm,
  Profile,
  ProfileTitle,
  ProfileInfo,
} from "./styles";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";

import { BsBoxArrowInUpRight, BsPeopleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";

import { PostCard } from "../../components/PostCard";

import { api } from "../../services/api";

export type PostType = {
  body: string;
  title: string;
  created_at: string;
  id: number;
  html_url: string;
  number: number;
  comments: number;
  login: string;
  user: {
    login: string;
  };
};

interface UserProps {
  company: string;
  followers: number;
  bio: string;
  name: string;
  login: string;
  html_url: string;
  posts: PostType[];
}

export const Home = () => {
  const [user, setUser] = useState<UserProps>({} as UserProps);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    (async () => {
      try {
        const resp = await api.get("/users/MatheusAndrade23");
        const userData = resp.data;

        const issues = await api.get("/search/issues", {
          params: {
            q: "repo:MatheusAndrade23/GitHub_Blog-Ignite is:issue",
          },
        });
        console.log(issues);
        setUser({ ...userData, posts: issues.data.items });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSearch = async (data: any) => {
    try {
      const issues = await api.get("/search/issues", {
        params: {
          q: `repo:MatheusAndrade23/GitHub_Blog-Ignite is:issue ${data.query}`,
        },
      });

      setUser((state) => {
        return { ...state, posts: issues.data.items };
      });
    } catch (error) {
      console.log(error);
    }
  };

  const { company, followers, bio, name, login, html_url, posts = [] } = user;

  return (
    <HomeContainer>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/84635540?v=4"
          alt="Profile Image"
        />
        <div>
          <ProfileTitle>
            <h3>{name}</h3>
            <a href={html_url}>
              GITHUB <BsBoxArrowInUpRight />
            </a>
          </ProfileTitle>
          <p>{bio}</p>
          <ProfileInfo>
            <span>
              <AiFillGithub />
              {login}
            </span>
            <span>
              <BiBuilding />
              {company}
            </span>
            <span>
              <BsPeopleFill />
              {`${followers} seguidores`}
            </span>
          </ProfileInfo>
        </div>
      </Profile>
      <SearchForm onSubmit={handleSubmit(handleSearch)}>
        <div>
          <h4>Publicações</h4>
          <p>{`${posts.length} ${
            posts.length > 1 || posts.length === 0
              ? "publicações"
              : "publicação"
          }`}</p>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register("query")}
        />
      </SearchForm>
      <PostsContainer>
        {posts.map((post: PostType) => (
          <PostCard {...post} key={post.id} />
        ))}
      </PostsContainer>
    </HomeContainer>
  );
};
