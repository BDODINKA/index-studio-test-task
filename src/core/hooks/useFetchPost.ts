import { useEffect, useState } from "react";
import { api } from "../api/api";
import { CardType } from "../types/CardType";

export const useFetchPost = () => {
  const [post, setPost] = useState<CardType | null>(null);
  const [id, setId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;

    (async () => {
      setIsLoading(true);
      try {
        const res = await api.getPostId(id);
        if (res) {
          setPost(res);
        } else {
          const err = new Error("Ошибка при загрузке");
          setError(err.message);
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
  }, [id]);

  return { post, isLoading, error, setId };
};
