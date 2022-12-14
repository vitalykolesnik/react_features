import axios from "axios";

export const BASE_URL = "http://localhost:5000";
export const PLACEHOLDER = "https://jsonplaceholder.typicode.com";

const instance = axios.create({
  // withCredentials: true,
  baseURL: BASE_URL,
});

const placeholder = axios.create({
  baseURL: PLACEHOLDER,
});

type SuccessResType = {
  data: Array<unknown>;
};

type FilmType = {
  url: string;
};

export type FilmsResType = Array<FilmType>;

export const dataApi = {
  getData() {
    return instance.get<SuccessResType>(`/`).then((res) => {
      const { data } = res.data;
      return data;
    });
  },

  getAllFiles() {
    return instance.get<FilmsResType>(`/films`).then((res) => {
      return [...res.data];
    });
  },
};

export const placeholderApi = {
  getPosts() {
    return placeholder.get(`/posts`).then((res) => {
      return res.data;
    });
  },

  getPost(id: number) {
    return placeholder.get(`/posts/${id}`).then((res) => {
      return res.data;
    });
  },
};
