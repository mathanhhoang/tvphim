import { Row, Container, Col } from "react-bootstrap";
import CardFilm from "./CardFilm";
import "./card.css";
import Hot from "../Hot/Hot";
const Theater = (props) => {
  const { phimChieuRap } = props;
  return (
    <>
      <Container style={{ paddingTop: "7px" }}>
        <Row>
          <Col>
            <Row>
              {phimChieuRap.slice(0, 114).map((film) => {
                return (
                  <Col style={{ width: "200px" }}>
                    <CardFilm
                      category={film.category}
                      title={film.title}
                      imageUrl={film.imageUrl}
                      url={film.episode[0].url}
                    />
                  </Col>
                );
              })}{" "}
            </Row>
          </Col>
          <Hot />
        </Row>
      </Container>
    </>
  );
};

export default Theater;
