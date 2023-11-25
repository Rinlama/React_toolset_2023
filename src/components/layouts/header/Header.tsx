import { Container, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div>
      <Navbar className="bg-primary fixed-top">
        <Container>
          <Navbar.Brand className="text-white">Mini ChatGPT</Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
