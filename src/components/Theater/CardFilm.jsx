import { Col, Row } from "react-bootstrap";

const CardFilm = (props) => {
  const { category, title, imageUrl, url } = props;
  return (
    <>
      <div className="card">
        <div>
          <img className="image" src={imageUrl} />
        </div>
        <div className="title">{title}</div>
        <a href={url} className="button-62">
          Xem phim
        </a>
      </div>
    </>
  );
};

export default CardFilm;
