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

export type GoToPageType = {
  url: string;
  name: string;
};

export type PageDataType = {
  page: string;
  name: string;
};
