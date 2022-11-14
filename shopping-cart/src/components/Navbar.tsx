import { Button, Container, Nav, Navbar as NavBarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
const Navbar = () => {
  return (
    <>
      <NavBarBs
        sticky="top"
        className="bg-secondary rounded-4 shadow-sm mt-3 text-white"
      >
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/store" className="text-light">
              Store
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="text-light">
              About
            </Nav.Link>
          </Nav>
          <Button
            style={{ width: "3.5rem", height: "3.5rem", position: "relative" }}
            variant="outline-light"
            className="rounded-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg>
            <div
              className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1.5rem",
                height: "1.5rem",
                position: "absolute",
                bottom: "-0.5rem",
                right: "-0.5rem",
              }}
            >
              3
            </div>
          </Button>
        </Container>
      </NavBarBs>
    </>
  )
}

export default Navbar
