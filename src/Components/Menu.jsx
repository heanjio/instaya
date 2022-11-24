import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstra/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function Menu(){
    return(
        <Navbar bg="ligth" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React - Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-control="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav"/>
                    <Nav className="me-auto">
                        <NavLink to="/">home</NavLink>
                        <NavLink to="/login">login</NavLink>
                    </Nav>

            </Container>
        </Navbar>
    )

}

export default Menu