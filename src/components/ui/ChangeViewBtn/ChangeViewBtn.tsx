import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";

type PropsType = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  active?: boolean;
};

export const ChangeViewBtn: FC<PropsType> = ({ Icon, ...rest }) => {
  return (
    <SvgContainer {...rest}>
      <Icon />
    </SvgContainer>
  );
};
