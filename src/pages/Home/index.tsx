import {
  HomeContainer,
  PostsContainer,
  SearchForm,
  Profile,
  ProfileTitle,
  ProfileInfo,
} from "./styles";

import { BsArrowUpRight, BsPeopleFill } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BiBuilding } from "react-icons/bi";

import { PostCard } from "../../components/PostCard";

export const Home = () => {
  return (
    <HomeContainer>
      <Profile>
        <img
          src="https://avatars.githubusercontent.com/u/84635540?v=4"
          alt="Profile Image"
        />
        <div>
          <ProfileTitle>
            <h3>Matheus Andrade</h3>
            <a href="/">
              GITHUB <BsArrowUpRight />
            </a>
          </ProfileTitle>
          <p>
            Focado no desenvolvimento Full-Stack e voltado para as tecnologias
            relacionadas ao JavaScript.
          </p>
          <ProfileInfo>
            <span>
              <AiFillGithub />
              MatheusAndrade23
            </span>
            <span>
              <BiBuilding />
              Huawei
            </span>
            <span>
              <BsPeopleFill />
              23 seguidores
            </span>
          </ProfileInfo>
        </div>
      </Profile>
      <SearchForm>
        <div>
          <h4>Publicações</h4>
          <p>6 publicações</p>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </SearchForm>
      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  );
};
