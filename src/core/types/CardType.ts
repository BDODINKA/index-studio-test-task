export type CardType = {
  img: string[];
  id: string;
  seen: boolean;
  price: number;
  title: string;
  address: string;
  about: string;
  createdAt: string;
};

export type CardPropsType = {
  data: CardType;
  active?: boolean;
  orientation: OrientationType;
  isdisabled: boolean;
};

export type OrientationType = "horizontal" | "vertical";
