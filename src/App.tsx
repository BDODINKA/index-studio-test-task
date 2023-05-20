import React from "react";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { PageNotFound } from "./pages/404/404";
import { useRouter } from "./core/hooks/useRouter";

export const App = () => {
  const { route } = useRouter();

  let page;

  switch (route) {
    case "/":
      page = <PostsPage />;
      break;
    case "/card":
      page = <PostPage />;
      break;
    case "/404":
      page = <PageNotFound />;
      break;
    default:
      page = <PostsPage />;
  }
  return page;
};
