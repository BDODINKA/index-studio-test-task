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
  onClickShowMore: () => void;
  finishPosts: boolean;
  onClickRetry: () => void;
  isPosts: boolean;
};

export const PostsStatusBar: FC<PropsType> = ({
  error,
  onClickShowMore,
  finishPosts,
  isloading,
  onClickRetry,
  isPosts,
}) => {
  if (isloading)
    return (
      <PostsStatusBarStyled $isloading={isloading}>
        <Spinner />
      </PostsStatusBarStyled>
    );

  if (error || isPosts)
    return (
      <PostsStatusBarStyled $error={!!error}>
        <ErrorStatusBarStyled children={error} />
        <BtnStyled
          children={"Повторить попытку"}
          width={164}
          height={32}
          onClick={onClickRetry}
        />
      </PostsStatusBarStyled>
    );

  if (finishPosts) return <PostsStatusBarStyled />;

  return (
    <PostsStatusBarStyled>
      <BtnStyled children={"Показать еще"} onClick={onClickShowMore} />
    </PostsStatusBarStyled>
  );
};
