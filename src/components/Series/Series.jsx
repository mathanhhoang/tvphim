import { CardGroup, Card } from "react-bootstrap";
const Series = (props) => {
  const { phimBo } = props;
  console.log(phimBo);
  return (
    <>
      <CardGroup>
        {phimBo.slice(1, 5).map((item) => {
          return (
            <Card>
              <Card.Img variant="top" src={item.imageUrl} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
              </Card.Body>
              <Card.Footer>
                <a href={item.url}>XemPhim</a>
              </Card.Footer>
            </Card>
          );
        })}
      </CardGroup>
    </>
  );
};

export default Series;
