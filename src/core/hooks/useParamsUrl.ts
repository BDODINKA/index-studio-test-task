import { useEffect, useState } from "react";
import { UseParamsType } from "../types/ParamsType";

export const useParamsUrl = (): UseParamsType => {
  const [params, setParams] = useState({} as { id: string; img: string[] });

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const img = urlParams.getAll("images");
    id && setParams({ id, img });
  }, []);

  const setUrlsCardParams = async (urlParams: {
    id: string;
    img: string[];
  }) => {
    const { id, img } = urlParams;
    const stringImg = img.map((el) => `&images=${el}`);
    const newPageLocation = {
      pathname: `/card`,
      search: `?id=${id}${stringImg}`,
      hash: "#card",
    };
    window.location.assign(
      `${newPageLocation.pathname}${newPageLocation.search}${newPageLocation.hash}`
    );
  };

  return { params, setUrlsCardParams };
};
