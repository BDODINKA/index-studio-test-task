import React from "react";
import { useDataCard } from "../../core/hooks/useRouter";
import { Card } from "../../components/card/Card";
import { Spinner } from "../../components/ui/Spinner/Spinner.styled";

export const PostPage = () => {
  const { cardData } = useDataCard();

  const { id, nameProduct, city, time, images, cost } = cardData;
  console.log(images);

  if (!images) return <Spinner />;
  return (
    <div>
      <Card
        nameProduct={nameProduct}
        orientation={"vertical"}
        cost={+cost}
        city={city}
        images={images}
        time={time}
        id={id}
      />
    </div>
  );
};
