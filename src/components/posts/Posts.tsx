import React, { FC } from "react";
import { Card } from "../card/Card";
import { PostsStyled } from "./Posts.styled";
import { CardType, OrientationType } from "../../core/types/CardType";

type PropsType = {
  posts: CardType[];
  orientation: OrientationType;
  isdisabled: boolean;
};

export const Posts: FC<PropsType> = ({ posts, isdisabled, orientation }) => {
  return (
    <PostsStyled orientation={orientation}>
      {posts.map((el) => (
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
