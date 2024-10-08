export type GetUserDetailsBody = {
  id: string;
};

export type GetUserDetailsResult = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type GetImagesListBody = {
  page: number;
  limit: number;
};

export type GetImagesListResult = {
  id: string;
  author: string;
  width: number;
  height: number;
  url: string;
  download_url: string;
}[];
