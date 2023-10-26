export type FetchDataType = {
  author: string;
  title: string;
  url: string;
  img: string;
};

export type BannerDataType = {
  data: FetchDataType[];
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

export type FetchWebToonCardType = {
  img: string;
  url: string;
  title: string;
};
