import { useEffect, useState } from "react";
import { api } from "../api/api";
import { CardType } from "../types/CardType";
import { imgMultiplier } from "../utils/imgMultiplier";

export const useFetchData = () => {
  const [finishPages, setFinishPages] = useState(false);
  const [posts, setPosts] = useState<CardType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [params, setParams] = useState({ page: 1, size: 20 });

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const res = await Promise.all([
          api.getPosts(params),
          api.getImg({ page: params.page, per_page: params.size }),
        ]);

        const img = res[1].data.map((el) => el.urls.thumb);

        const result = imgMultiplier(4, img, 5);

        const resPosts = res[0].items.map((el, i) => ({
          ...el,
          img: result[i],
        }));

        setPosts([...posts, ...resPosts]);

        if (res[0].pages === params.page) {
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
