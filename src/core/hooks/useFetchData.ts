import { useState, useEffect } from "react";
import { api, ResponsePostsType } from "../api/api";

export const useFetchData = () => {
  const [posts, setPosts] = useState<ResponsePostsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [params, setParams] = useState({ page: 1, size: 20 });

  const [totalPosts, setTotalPosts] = useState(0);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await api.getPosts(params);
        setPosts([...posts, ...res.data.items]);
        setTotalPosts(res.data.total);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          const err = new Error("Ошибка при загрузке");
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params]);

  const showMoreHandler = () => {
    setParams({ page: params.page + 1, size: 10 });
  };

  return { posts, isLoading, error, showMoreHandler, totalPosts };
};
