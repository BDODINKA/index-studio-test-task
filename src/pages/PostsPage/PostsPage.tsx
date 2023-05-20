import React, { FC, useEffect, useState } from "react";
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
import { OrientationType } from "../../core/types/CardType";

export const PostsPage: FC = () => {
  const { posts, finishPages, isLoading, error, showMoreHandler } =
    useFetchData();

  const [orientation, setOrientation] = useState<OrientationType>("vertical");

  useEffect(() => {
    const orientation = localStorage.getItem("orientation");
    if (orientation) {
      setOrientation(orientation as OrientationType);
    }
  }, []);

  const changeOrientationHandler = (orientation: OrientationType) => {
    setOrientation(orientation);
    localStorage.setItem("orientation", orientation);
  };

  return (
    <>
      <HeaderStyled>
        <HeaderWrapperStyled>
          <ChangeViewBtn
            onClick={changeOrientationHandler}
            orientation={orientation}
            isdisabled={!posts}
          />
        </HeaderWrapperStyled>
      </HeaderStyled>
      <SectionStyled>
        <SectionWrapperStyled>
          <Posts posts={posts} orientation={orientation} isdisabled={!posts} />
          <ScrollBtn />
        </SectionWrapperStyled>
      </SectionStyled>
      <SectionStyled>
        <SectionWrapperStyled>
          <PostsStatusBar
            isloading={isLoading}
            error={error}
            onClick={showMoreHandler}
            finishPosts={finishPages}
          />
        </SectionWrapperStyled>
      </SectionStyled>
    </>
  );
};
