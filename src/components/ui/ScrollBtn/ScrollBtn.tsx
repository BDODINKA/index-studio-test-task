import React, { FC } from "react";
import { SvgContainer } from "../SvgContainer/SvgContainer.styled";
import { ScrollBtnStyled } from "./ScrollBtn.styled";
import { ReactComponent as ScrollIcon } from "../../../assets/svg/arrow.svg";
import { useScroll } from "../../../core/hooks/useScrollBtn";

type PropsType = {
  width?: number;
  height?: number;
  active?: boolean;
};

export const ScrollBtn: FC<PropsType> = ({ ...rest }) => {
  const { isScrolled, scrollToTop } = useScroll();

  if (!isScrolled) return null;

  return (
    <ScrollBtnStyled onClick={scrollToTop}>
      <SvgContainer btntype={"scroll"} {...rest}>
        <ScrollIcon />
        {"Вверх"}
      </SvgContainer>
    </ScrollBtnStyled>
  );
};
