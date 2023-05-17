import React, { FC, useEffect, useState } from "react";
import { api, ResponsePostsType } from "../../core/api/api";
import {
  HeaderStyled,
  HeaderWrapperStyled,
} from "../../components/header/Header.styled";
import { ChangeViewBtn } from "../../components/ui/ChangeViewBtn/ChangeViewBtn";
import {
  SectionStyled,
  SectionWrapperStyled,
} from "../../components/section/Section.styled";
import { Posts } from "../../components/posts/Posts";
import { PostsStatusBar } from "../../components/posts-status-bar/PostsStatusBar";

export const PostsPage: FC = () => {
  const [posts, setPosts] = useState<ResponsePostsType[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const posts = await api.getPosts(1);
        setPosts(posts.data.items);
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
    })();
  }, []);

  return (
    <>
      <HeaderStyled>
        <HeaderWrapperStyled>
          <ChangeViewBtn isdisabled={false} />
        </HeaderWrapperStyled>
      </HeaderStyled>
      <SectionStyled>
        <SectionWrapperStyled>
          <Posts posts={posts} orientation={"horizontal"} isdisabled={true} />
        </SectionWrapperStyled>
      </SectionStyled>
      <SectionStyled>
        <SectionWrapperStyled>
          <PostsStatusBar isloading={false} />
        </SectionWrapperStyled>
      </SectionStyled>
    </>
  );
};
