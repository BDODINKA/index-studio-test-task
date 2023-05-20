export type CardParamsType = {
  page: number;
  size: number;
};
export type ImgParamsType = {
  page: number;
  per_page: number;
};

export type UseParamsType = {
  setUrlsCardParams: (url: { id: string; img: string[] }) => void;
  params: {
    id: string | null;
    img: string[];
  };
};
