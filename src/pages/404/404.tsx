import { SubTitleStyled } from "../../components/ui/SubTitle/SubTitle.styled";
import { TitleStyled } from "../../components/ui/Title/Title.styled";
import { PageNotFoundStyled } from "./404.styled";

export const PageNotFound = () => {
  return (
    <PageNotFoundStyled>
      <TitleStyled
        size={"md"}
        color={"#00A0AB"}
        children={"ОБЪЯВЛЕНИЙ НЕ НАЙДЕНО"}
      />
      <SubTitleStyled
        size={"md"}
        children={
          "Простите, по вашему запросу товаров сейчас нет." +
          "Задайте запрос по-другому или измените характеристики"
        }
      />
    </PageNotFoundStyled>
  );
};
