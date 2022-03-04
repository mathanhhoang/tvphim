import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">TV Phim</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/phim-bo">
                Phim bộ
              </Nav.Link>
              <Nav.Link as={Link} to="/phim-le">
                Phim lẻ
              </Nav.Link>
              <Nav.Link as={Link} to="/phim-chieu-rap">
                Phim chiếu rạp
              </Nav.Link>
              {/* <Nav.Link href="#">Phim chiếu rạp</Nav.Link>
              <Nav.Link href="#">Phim hoạt hình</Nav.Link> */}
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Tìm kiếm phim"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
