import React from "react";
import { VideoPlayer } from "component/VideoPlayer/VideoPlayer";
import { BASE_URL, dataApi, FilmsResType } from "api/api";
import { ErrorPanel, ErrorType } from "component/App/ErrorPanel";

export const VideoPlaylist: React.FC = () => {
  const [films, setFilms] = React.useState<FilmsResType>([]);
  const [error, setError] = React.useState<ErrorType | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    handleFilms();
  }, []);

  const handleFilms = async () => {
    try {
      setIsLoading(true);
      const films = await dataApi.getAllFiles();
      setFilms(films);
    } catch (err: any) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const filmsElements = films.map((f: any, i) => (
    <VideoPlayer source={BASE_URL + f.url} key={i} />
  ));

  return (
    <>
      <p className="py-4 text-2xl font-bold underline">Video player</p>
      {isLoading ? (
        "Loading...."
      ) : error ? (
        <ErrorPanel message={error.message} action={handleFilms} />
      ) : (
        <>
          <div className="grid grid-flow-row my-4 lg:grid-cols-3">
            {filmsElements}
          </div>
        </>
      )}
    </>
  );
};
