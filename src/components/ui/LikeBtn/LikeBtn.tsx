import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";

type PropsType = {
  isLiked?: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isdisabled?: boolean;
};

export const LikeBtn: FC<PropsType> = ({ isLiked, isdisabled, Icon }) => {
  return (
    <SvgContainer btntype={"likeBtn"} active={isLiked} disabled={isdisabled}>
      <Icon />
    </SvgContainer>
  );
};
