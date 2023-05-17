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
    <SvgContainer btntype={"scroll"} {...rest}>
      <Icon />
      {children}
    </SvgContainer>
  );
};
