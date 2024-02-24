import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavBar({ filterBySearch }) {
  const [searchValue, setSearchValue] = useState("")
  const onSearch = () => {
    filterBySearch(searchValue)
    setSearchValue("")
  }
  return (
    <Row>  <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#"><div className='brand-color'>مطعم أبو علاء</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث..."
              className="mx-2"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button onClick={onSearch} className='btn-search'>بحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar></Row>
  
  );
}

export default NavBar;