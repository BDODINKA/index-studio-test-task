import { instance, instanceImg } from "./apiConfig";
import { CardType } from "../types/CardType";
import { ResponseCardType, ResponseImgType } from "../types/ResponceType";
import { CardParamsType, ImgParamsType } from "../types/ParamsType";

export const api = {
  getPosts(params?: CardParamsType) {
    return instance
      .get<ResponseCardType>(`items`, {
        params,
      })
      .then((res) => res.data);
  },
  async getPostId(id: string) {
    return instance.get<CardType>(`items/${id}`).then((res) => res.data);
  },
  async getImg(params: ImgParamsType) {
    return instanceImg.get<ResponseImgType[]>("photos", { params });
  },
};
