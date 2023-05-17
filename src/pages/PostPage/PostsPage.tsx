import React, { FC, useEffect, useState } from "react";
import { api, ResponsePostsType } from "../../core/api/api";
import { Card } from "../../components/card/Card";

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
    <div>
      {posts.map((el) => (
        <Card
          key={el.id}
          images={["ssss", "ssss", "ssss", "ssss"]}
          cost={el.price}
          nameProduct={el.title}
          city={el.address}
          time={el.createdAt}
          orientation={"horizontal"}
        />
      ))}
    </div>
  );
};
