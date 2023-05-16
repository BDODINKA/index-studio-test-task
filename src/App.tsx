import React from "react";

import "./App.css";
import { PostsPage } from "./pages/PostsPage";
import { LikeBtn } from "./components/ui/LikeBtn/LikeBtn.styled";
import { Spinner } from "./components/ui/Spinner/Spinner.styled";
import { ReactComponent as ListIcon } from "../src/assets/svg/list.svg";
import { ReactComponent as TileIcon } from "../src/assets/svg/tile.svg";
import { ReactComponent as Arrow } from "../src/assets/svg/arrow.svg";
import { ChangeViewBtn } from "./components/ui/ChangeViewBtn/ChangeViewBtn";
import { ScrollBtn } from "./components/ui/ScrollBtn/ScrollBtn";

export const App = () => {
  return (
    <div className="App">
      <PostsPage />
      <LikeBtn />
      <Spinner />
      <ChangeViewBtn Icon={ListIcon} width={50} height={50} active={true} />
      <ChangeViewBtn Icon={TileIcon} width={50} height={50} />
      <ScrollBtn Icon={Arrow} children={"вверх"} width={20} height={20} />
    </div>
  );
};
