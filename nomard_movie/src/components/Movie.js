import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// 부모 컴포넌트인 App.js에서 밑의 4가지 내용을 받아올거래
function Movie({ id, coverImg, title, summary, genres }) {
  return (
    // <div key={movie.id}>
    //   <img src={movie.medium_cover_image} />
    //   <h2>{movie.title}</h2>
    //   <p>{movie.summary}</p>
    //   <ul>
    //     {movie.genres.map((g) => (
    //       <li key={g}>{g}</li>
    //     ))}
    //   </ul>
    // </div>

    // 위의 코드들은 정의 되지 않은 것들이 있어서 오류가 뜨고 물결이 생겨
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}
Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
