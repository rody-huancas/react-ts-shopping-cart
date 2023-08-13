import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
export const Navbar = () => {
  return (
    <>
      <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Inicio
            </Nav.Link>
            <Nav.Link to="/store" as={NavLink}>
              Tienda
            </Nav.Link>
            <Nav.Link to="/about" as={NavLink}>
              Nosotros
            </Nav.Link>
          </Nav>

          <Button variant="outline-primary" style={{ position: "relative" }}>
            <BsFillCartCheckFill />
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(45%, 45%)",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};
