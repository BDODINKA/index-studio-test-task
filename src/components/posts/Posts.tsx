import React, { FC } from "react";
import { Card } from "../card/Card";
import { PostsStyled } from "./Posts.styled";
import { ResponsePostsType } from "../../core/api/api";

type PropsType = {
  posts: ResponsePostsType[];
  orientation: "horizontal" | "vertical";
  isdisabled?: boolean;
};
export const Posts: FC<PropsType> = ({ posts, isdisabled, orientation }) => {
  return (
    <PostsStyled orientation={orientation}>
      {posts.map((el) => (
        <Card
          key={el.id}
          images={el.img}
          cost={el.price}
          nameProduct={el.title}
          city={el.address}
          time={el.createdAt}
          orientation={orientation}
          isdisabled={isdisabled}
        />
      ))}
    </PostsStyled>
  );
};
