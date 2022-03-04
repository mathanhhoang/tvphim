import { useContext } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import { PhimHotContext } from "../../App";
import "./hot.css";

const Hot = () => {
  const phimHot = useContext(PhimHotContext);
  return (
    <>
      <Card style={{ width: "18rem", backgroundColor: "black" }}>
        <Card.Header
          style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
        >
          Phim HOT
        </Card.Header>
        {phimHot.map((item) => {
          return (
            <Row
              style={{
                backgroundColor: "black",
                borderStyle: "solid",
                borderColor: "white",
                marginTop: "1px",
              }}
            >
              <Col xs={6} md={4}>
                <img className="image-hot" src={item.imageUrl} />
              </Col>
              <Col className="title-hot">
                <a
                  href={item.url}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {item.title}
                </a>
              </Col>
            </Row>
          );
        })}
      </Card>
    </>
  );
};

export default Hot;
<></>;
