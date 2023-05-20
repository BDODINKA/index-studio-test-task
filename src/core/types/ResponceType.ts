import { CardType } from "./CardType";

type ImgUrlsType = {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
};

export type ResponseImgType = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  promoted_at?: any;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: ImgUrlsType;
  links?: any;
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any;
  sponsorship: any;
  topic_submissions: any;
  user: any;
};

export type ResponseCardType = {
  items: CardType[];
  total: number;
  page: number;
  size: number;
  pages: number;
};
