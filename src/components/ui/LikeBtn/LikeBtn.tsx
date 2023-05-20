import React, { FC, SyntheticEvent } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";

type PropsType = {
  isLiked: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  onClick: (event: SyntheticEvent) => void;
};

export const LikeBtn: FC<PropsType> = ({ isLiked, onClick, Icon }) => {
  return (
    <SvgContainer btntype={"likeBtn"} $active={isLiked}>
      <Icon onClick={onClick} />
    </SvgContainer>
  );
};
