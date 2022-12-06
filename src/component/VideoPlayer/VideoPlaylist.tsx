import React, { useCallback, useEffect, useState } from "react";
import { VideoPlayer } from "component/VideoPlayer/VideoPlayer";
import { BASE_URL, dataApi, FilmsResType } from "api/api";

export const VideoPlaylist = () => {
  const [films, setFilms] = useState<FilmsResType>([]);

  const handleFilms = useCallback(async () => {
    const filmsList = await dataApi.getAllFiles();
    setFilms(filmsList);
  }, []);

  useEffect(() => {
    handleFilms();
  }, [handleFilms]);

  const filmsElements = films.map((f: any, i) => (
    <VideoPlayer source={BASE_URL + f.url} key={i} />
  ));

  return (
    <>
      <p className="py-4 text-2xl font-bold underline">Video player</p>
      <div className="grid grid-flow-row my-4 lg:grid-cols-3 ">
        {filmsElements}
      </div>
    </>
  );
};
