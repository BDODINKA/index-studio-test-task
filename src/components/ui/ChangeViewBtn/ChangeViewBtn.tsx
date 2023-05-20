import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";
import { ReactComponent as IconTile } from "../../../assets/svg/tile.svg";
import { ReactComponent as IconList } from "../../../assets/svg/list.svg";
import { ChangeViewBtnStyled } from "./ChangeViewBtn.styled";
import { OrientationType } from "../../../core/types/CardType";

type PropsType = {
  width?: number;
  height?: number;
  isdisabled: boolean;
  onClick: (orientation: OrientationType) => void;
  orientation: OrientationType;
};

export const ChangeViewBtn: FC<PropsType> = ({
  isdisabled,
  onClick,
  orientation,
  ...rest
}) => {
  if (isdisabled) return <ChangeViewBtnStyled $isdisabled={isdisabled} />;

  return (
    <ChangeViewBtnStyled>
      <SvgContainer
        btntype={"change"}
        $active={orientation === "vertical"}
        {...rest}
        onClick={() => onClick("vertical")}
      >
        <IconTile />
      </SvgContainer>
      <SvgContainer
        btntype={"change"}
        {...rest}
        $active={orientation === "horizontal"}
        onClick={() => onClick("horizontal")}
      >
        <IconList />
      </SvgContainer>
    </ChangeViewBtnStyled>
  );
};
