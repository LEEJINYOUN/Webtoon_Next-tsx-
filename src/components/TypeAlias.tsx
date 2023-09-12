export type GetDataType = {
  author: string;
  title: string;
  url: string;
  img: string;
};

export type BannerDataType = {
  data: GetDataType[];
  name: string;
  linkHref: string;
};
