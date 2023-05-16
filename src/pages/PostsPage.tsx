import { FC, useEffect, useState } from "react";
import { api, ResponsePostsType } from "../core/api/api";
import { StyledBtn } from "../components/ui/Button/Button.styled";

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
      <div>
        <StyledBtn children={"privet"} />
        {posts.map((el) => (
          <div key={el.id}>{el.title}</div>
        ))}
      </div>
    </div>
  );
};
