import { instance } from "./apiConfig";

type ParamsType = {
  page: number;
  size: number;
};
export const api = {
  getPosts(params?: ParamsType) {
    return instance.get<ResponseType>(`items`, {
      params,
    });
  },
  async getPostId(id: number) {
    return instance.get(`items/${id}`);
  },
};

export type ResponseType = {
  items: ResponsePostsType[];
  total: number;
  page: number;
  size: number;
  pages: number;
};
export type ResponsePostsType = {
  id: string;
  seen: boolean;
  price: number;
  title: string;
  address: string;
  about: string;
  createdAt: string;
};
