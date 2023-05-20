import React, { useEffect, useState } from "react";
import { useFetchPost } from "../../core/hooks/useFetchPost";
import { Card } from "../../components/card/Card";
import { CardType } from "../../core/types/CardType";
import { useParamsUrl } from "../../core/hooks/useParamsUrl";

export const PostPage = () => {
  const { post, setId } = useFetchPost();
  const [data, setData] = useState<CardType>({} as CardType);
  const { params } = useParamsUrl();

  useEffect(() => {
    params.id && setId(params.id);
    params.img && post && setData({ ...post, img: params.img });
  }, [post, setId, params]);

  if (!post) {
    return <Card data={data} orientation={"vertical"} isdisabled={true} />;
  }

  return <Card data={data} orientation={"vertical"} isdisabled={false} />;
};
