import { useState, useEffect } from "react";
import { api, ResponsePostsType } from "../api/api";

export const useFetchData = () => {
  const [finishPages, setFinishPages] = useState(false);
  const [posts, setPosts] = useState<ResponsePostsType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [params, setParams] = useState({ page: 1, size: 20 });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await Promise.all([api.getPosts(params), api.getImg()]);
        const items = res[0].data.items.map((el, i) => ({
          ...el,
          img: [
            res[1].data[i].urls.thumb,
            res[1].data[i + 1].urls.thumb,
            res[1].data[i + 2].urls.thumb,
            res[1].data[i + 3].urls.thumb,
          ],
        }));
        setPosts([...posts, ...items]);
        if (res[0].data.pages === params.page) {
          setFinishPages(true);
        }
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
    setParams({ ...params, page: params.page + 1 });
  };

  return { posts, isLoading, error, showMoreHandler, finishPages };
};
