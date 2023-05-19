import React, { FC, SyntheticEvent } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";

type PropsType = {
  isLiked?: boolean;
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  isdisabled?: boolean;
  onClick: (event: SyntheticEvent) => void;
};

export const LikeBtn: FC<PropsType> = ({
  isLiked,
  onClick,
  isdisabled,
  Icon,
}) => {
  return (
    <SvgContainer btntype={"likeBtn"} active={isLiked} disabled={isdisabled}>
      <Icon onClick={onClick} />
    </SvgContainer>
  );
};
