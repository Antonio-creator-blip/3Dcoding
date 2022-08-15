import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../../App.css';
import '../../Home/Home.css'
import Button from 'react-bootstrap/Button';

function NavBar_component() {
  return (
    <div>
    <Navbar  expand="lg" id='navbar'>
      <Container fluid>
          <Navbar.Brand href="#home">
            <a href="/">
              <div className="logo">
                <p className="first-part-logo">
                  3D 
                </p>
                <p className="second-part-logo">
                  Coding
                </p>
              </div>
            </a>
            
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100vh' }}
            navbarScroll
            id="text-navbar"
          >
            <Nav.Link href="/" className='text-navbar'>Home</Nav.Link>
            <Nav.Link href="/python/install" className='text-navbar'>Installation and Setup</Nav.Link>
            <Nav.Link href="/python/start" className='text-navbar'> <a href="/python/start">Syntax</a> </Nav.Link>
            <NavDropdown title="Programming Languages" id="navbarScrollingDropdown" className='text-navbar'>
              <NavDropdown.Item href="/python" className='text-navbar-scroll'>Python</NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/js">JavaScript</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/php">PHP</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/c">C</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/c++">C++</a></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Web development" id="navbarScrollingDropdown" className='text-navbar'>
              <NavDropdown.Item href="#action4" className='text-navbar-scroll'><a href="/html">HTML</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/css">CSS</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/javascript">JavaScript</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/react">React</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/vue">Vue</a></NavDropdown.Item>
              <NavDropdown.Item href="#action5" className='text-navbar-scroll'><a href="/angular">Angular</a></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="2D Drawing" id="navbarScrollingDropdown" className='text-navbar'>
              <NavDropdown.Item href="#action4" className='text-navbar'><a href="/autocad">AutoCAD</a></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="3D Modelling" id="navbarScrollingDropdown" className='text-navbar'>
              <NavDropdown.Item href="#action4" className='text-navbar-scroll'><a href="/autocad">AutoCAD</a></NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='text-navbar-scroll'><a href="/fusion360">Fusion360</a></NavDropdown.Item>
              <NavDropdown.Item href="#action4" className='text-navbar-scroll'><a href="/inventor">Inventor</a></NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action1" className='text-navbar'><a href="/plc">PLC</a></Nav.Link>
            <Nav.Link href="#action1" className='text-navbar'><a href="/arduino">Arduino</a></Nav.Link>
            <Nav.Link href="#action1" className='text-navbar'><a href="/raspberry">Raspberry</a></Nav.Link>
            <Nav.Link href="#action1" className='text-navbar'><a href="/3dprinting">3D Printing</a></Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div className='btn-back'>
      <Button variant='outline-danger' href='/python'> <i className='arrow left'></i> Go Back </Button>
    </div>
    </div>
  );
}

export default NavBar_component;
