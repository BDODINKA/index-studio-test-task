import React, { FC } from "react";
import {
  ErrorStatusBarStyled,
  PostsStatusBarStyled,
} from "./PostsStatusBar.styled";
import { BtnStyled } from "../ui/Button/Button.styled";
import { Spinner } from "../ui/Spinner/Spinner.styled";

type PropsType = {
  isloading: boolean;
  error?: string;
  onClick: () => void;
  finishPosts: boolean;
};

export const PostsStatusBar: FC<PropsType> = ({
  isloading,
  error,
  onClick,
  finishPosts,
}) => {
  if (isloading)
    return (
      <PostsStatusBarStyled isLoading={isloading}>
        <Spinner />
      </PostsStatusBarStyled>
    );

  if (error)
    return (
      <PostsStatusBarStyled error={!!error}>
        <ErrorStatusBarStyled children={error} />
        <BtnStyled children={"Повторить попытку"} width={164} height={32} />
      </PostsStatusBarStyled>
    );

  if (finishPosts) return <PostsStatusBarStyled />;

  return (
    <PostsStatusBarStyled>
      <BtnStyled children={"Показать еще"} onClick={onClick} />
    </PostsStatusBarStyled>
  );
};
