import axios from "axios";

export const BASE_URL = "http://localhost:5000";

const instance = axios.create({
  // withCredentials: true,
  baseURL: BASE_URL,
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
