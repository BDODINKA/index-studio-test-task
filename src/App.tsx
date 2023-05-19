import React, { useEffect, useState } from "react";
import { PostsPage } from "./pages/PostsPage/PostsPage";
import { PostPage } from "./pages/PostPage/PostPage";
import { PageNotFound } from "./pages/404/404";

export const App = () => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleRouteChange = () => {
      setRoute(window.location.pathname);
    };
    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  let Page;

  switch (route) {
    case "/":
      Page = <PostsPage />;
      break;
    case "/card":
      Page = <PostPage />;
      break;
    case "/404":
      Page = <PageNotFound />;
      break;
    default:
      Page = <PostsPage />;
  }
  return Page;
};
