import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";

type PropsType = {
  Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  width?: number;
  height?: number;
  active?: boolean;
  children?: React.ReactNode;
};

export const ScrollBtn: FC<PropsType> = ({ Icon, children, ...rest }) => {
  return (
    <SvgContainer {...rest}>
      <Icon />
      {children}
    </SvgContainer>
  );
};
