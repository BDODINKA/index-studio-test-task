import React, { FC, SyntheticEvent, useEffect, useState } from "react";
import {
  CardCostContainer,
  CardNameProductContainer,
  CardPlaceContainer,
  CardProduct,
  CardWrapper,
} from "./Card.styled";

import "swiper/css";
import "swiper/css/pagination";
import { TitleStyled } from "../ui/Title/Title.styled";
import { LikeBtn } from "../ui/LikeBtn/LikeBtn";
import { ReactComponent as LikeIcon } from "../../assets/svg/IconLike.svg";
import { SubTitleStyled } from "../ui/SubTitle/SubTitle.styled";
import { useParamsUrl } from "../../core/hooks/useParamsUrl";
import { CardPropsType } from "../../core/types/CardType";
import { CardSwiper } from "./CardSwiper";

export const Card: FC<CardPropsType> = ({ orientation, isdisabled, data }) => {
  const [like, setLike] = useState(false);
  const { setUrlsCardParams } = useParamsUrl();

  const { id, seen, address, title, img, createdAt, price } = data;

  useEffect(() => {
    const likeId = localStorage.getItem(`like:${id}`);
    if (likeId === id) {
      setLike(true);
    }
  }, [id]);

  const likeHandler = (event: SyntheticEvent) => {
    event.stopPropagation();
    if (like) {
      localStorage.removeItem(`like:${id}`);
      setLike(false);
    } else {
      localStorage.setItem(`like:${id}`, id);
      setLike(true);
    }
  };

  const onClickOpenCard = () => {
    setUrlsCardParams({ id, img });
  };

  return (
    <CardWrapper orientation={orientation}>
      <CardSwiper
        seen={seen}
        orientation={orientation}
        isdisabled={isdisabled}
        img={img}
      />
      <CardProduct orientation={orientation} onClick={onClickOpenCard}>
        <CardCostContainer isdisabled={isdisabled} orientation={orientation}>
          <TitleStyled size={"lg"} children={price} />
          <LikeBtn Icon={LikeIcon} isLiked={like} onClick={likeHandler} />
        </CardCostContainer>
        <CardNameProductContainer
          isdisabled={isdisabled}
          orientation={orientation}
        >
          <TitleStyled size={"sm"} children={title} />
        </CardNameProductContainer>
        <CardPlaceContainer isdisabled={isdisabled} orientation={orientation}>
          <SubTitleStyled size={"sm"} children={address} />
          <SubTitleStyled size={"sm"} children={createdAt} />
        </CardPlaceContainer>
      </CardProduct>
    </CardWrapper>
  );
};
