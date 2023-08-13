import { Container, Nav, Navbar as NavbarBs, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useShoppingCart } from "../context/ShoppingCartContext";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <>
      <NavbarBs
        sticky="top"
        className="navbar-dark text-bg-dark py-4 shadow-sm mb-3"
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link to="/" as={NavLink}>
              Inicio
            </Nav.Link>
          </Nav>

          {cartQuantity > 0 && (
            <Button
              onClick={openCart}
              variant="outline-primary"
              style={{ position: "relative" }}
            >
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
                {cartQuantity}
              </div>
            </Button>
          )}
        </Container>
      </NavbarBs>
    </>
  );
};
