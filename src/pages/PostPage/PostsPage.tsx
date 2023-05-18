import React, { FC, useState } from "react";
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
import { ScrollBtn } from "../../components/ui/ScrollBtn/ScrollBtn";
import { useFetchData } from "../../core/hooks/useFetchData";

export const PostsPage: FC = () => {
  const { posts, totalPosts, isLoading, error, showMoreHandler } =
    useFetchData();

  const [orientation, setOrientation] = useState<"horizontal" | "vertical">(
    "vertical"
  );

  return (
    <>
      <HeaderStyled>
        <HeaderWrapperStyled>
          <ChangeViewBtn onClick={setOrientation} orientation={orientation} />
        </HeaderWrapperStyled>
      </HeaderStyled>
      <SectionStyled>
        <SectionWrapperStyled>
          <Posts posts={posts} orientation={orientation} />
          <ScrollBtn />
        </SectionWrapperStyled>
      </SectionStyled>
      <SectionStyled>
        <SectionWrapperStyled>
          <PostsStatusBar
            isloading={isLoading}
            error={error}
            onClick={showMoreHandler}
            finishPosts={posts.length === totalPosts}
          />
        </SectionWrapperStyled>
      </SectionStyled>
    </>
  );
};
