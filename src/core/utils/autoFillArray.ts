import { CardType } from "../types/CardType";

export const autoFillArray = (length: number) => {
  return new Array(length).fill({} as CardType);
};
