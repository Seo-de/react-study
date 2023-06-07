import { useEffect, useState } from "react";
import Movie from "./components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // async wait 사용을 위한 getMoveis 만들기
  const getMoveis = async () => {
    // const response = await fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // );
    // const json = await response.json();

    // 위의 주석 코드를 조금 더 짧게 만든 코드
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  // 어떠한 dependencies도 갖지않고,
  // 빈 배열은 어느것도 주시하거나 의존하지 않음
  useEffect(() => {
    // fetch(
    //   "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    // )
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setMovies(json.data.movies);
    //     setLoading(false);
    //   });
    // 위의 주석 코드를 .then 대신에 async await을 이용해서 다시 작성해줄거래
    // 그래서 getMoveis 함수를 만들었던 거
    getMoveis();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
