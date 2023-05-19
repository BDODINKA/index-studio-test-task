import { useEffect, useState } from "react";

type StateType = {
  id: string;
  nameProduct: string;
  images: string[];
  cost: string;
  city: string;
  time: string;
};

export const useDataCard = () => {
  const [cardData, setCardData] = useState({});

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const nameProduct = urlParams.get("nameProduct");
    const images = urlParams.getAll("images");
    const cost = urlParams.get("cost");
    const city = urlParams.get("city");
    const time = urlParams.get("time");
    const liked = urlParams.get("liked");

    setCardData({
      id,
      nameProduct,
      images,
      cost,
      city,
      time,
      liked,
    });
  }, []);

  const setUrlsCardParams = (urlParams: {
    id: string;
    nameProduct: string;
    images: string[];
    cost: number;
    city: string;
    time: string;
  }) => {
    const { id, nameProduct, city, images, cost, time } = urlParams;
    const array = images.map((el) => `&images=${el}`);

    const newPageLocation = {
      pathname: `/card`,
      search: `?id=${id}&nameProduct=${nameProduct}&city=${city}${array}&cost=${cost}&time=${time}&id=${id}`,
      hash: "#card",
    };

    window.location.assign(
      `${newPageLocation.pathname}${newPageLocation.search}${newPageLocation.hash}`
    );
  };

  return { cardData: cardData as StateType, setUrlsCardParams };
};
