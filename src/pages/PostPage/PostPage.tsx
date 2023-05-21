import React, { useEffect, useState } from "react";
import { useFetchPost } from "../../core/hooks/useFetchPost";
import { Card } from "../../components/card/Card";
import { CardType } from "../../core/types/CardType";
import { useParamsUrl } from "../../core/hooks/useParamsUrl";
import {
  SectionStyled,
  SectionWrapperStyled,
} from "../../components/section/Section.styled";
import { ModalContainerStyled } from "../../components/modalContainer/ModalContainer.styled";

export const PostPage = () => {
  const { post, setId, error } = useFetchPost();
  const [data, setData] = useState<CardType>({} as CardType);
  const { params } = useParamsUrl();

  useEffect(() => {
    params.id && setId(params.id);
    post && setData({ ...post, img: params.img });
  }, [post, setId, params]);

  if (error) {
    window.location.assign(`/404`);
  }

  return (
    <SectionStyled>
      <SectionWrapperStyled>
        <ModalContainerStyled>
          <Card data={data} orientation={"vertical"} isdisabled={!post} />
        </ModalContainerStyled>
      </SectionWrapperStyled>
    </SectionStyled>
  );
};
