import React, { FC } from "react";
import { Card } from "../card/Card";
import { PostsStyled } from "./Posts.styled";
import { CardType, OrientationType } from "../../core/types/CardType";
import { autoFillArray } from "../../core/utils/autoFillArray";

type PropsType = {
  posts: CardType[] | null;
  orientation: OrientationType;
  isdisabled: boolean;
};

export const Posts: FC<PropsType> = ({ posts, isdisabled, orientation }) => {
  if (!posts)
    return (
      <PostsStyled orientation={orientation}>
        {autoFillArray(20).map((el, i) => (
          <Card
            key={i}
            data={el}
            orientation={orientation}
            isdisabled={isdisabled}
          />
        ))}
      </PostsStyled>
    );
  return (
    <PostsStyled orientation={orientation}>
      {posts &&
        posts.map((el) => (
          <Card
            key={el.id}
            data={el}
            orientation={orientation}
            isdisabled={isdisabled}
          />
        ))}
    </PostsStyled>
  );
};
