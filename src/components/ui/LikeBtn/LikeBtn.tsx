import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";

type PropsType = {
  isLiked?: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
};

export const LikeBtn: FC<PropsType> = ({ isLiked, Icon }) => {
  return (
    <SvgContainer btntype={"likeBtn"} active={isLiked}>
      <Icon />
    </SvgContainer>
  );
};
