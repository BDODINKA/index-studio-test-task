import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";
import { ReactComponent as IconTile } from "../../../assets/svg/tile.svg";
import { ReactComponent as IconList } from "../../../assets/svg/list.svg";
import { ChangeViewBtnStyled } from "./ChangeViewBtn.styled";

type PropsType = {
  width?: number;
  height?: number;
  active?: boolean;
  isdisabled: boolean;
};

export const ChangeViewBtn: FC<PropsType> = ({ isdisabled, ...rest }) => {
  return (
    <ChangeViewBtnStyled isdisabled={isdisabled}>
      {!isdisabled && (
        <>
          <SvgContainer btntype={"change"} {...rest}>
            <IconTile />
          </SvgContainer>
          <SvgContainer btntype={"change"} {...rest}>
            <IconList />
          </SvgContainer>
        </>
      )}
    </ChangeViewBtnStyled>
  );
};
