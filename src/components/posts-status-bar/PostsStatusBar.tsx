import React, { FC } from "react";
import { PostsStatusBarStyled } from "./PostsStatusBar.styled";
import { BtnStyled } from "../ui/Button/Button.styled";

type PropsType = {
  isloading: boolean;
  error?: string;
};

export const PostsStatusBar: FC<PropsType> = ({ isloading, error }) => {
  if (isloading) return <PostsStatusBarStyled>Loading</PostsStatusBarStyled>;

  if (error) return <PostsStatusBarStyled>{error}</PostsStatusBarStyled>;

  return (
    <PostsStatusBarStyled>
      <BtnStyled children={"Показать еще"} />
    </PostsStatusBarStyled>
  );
};
