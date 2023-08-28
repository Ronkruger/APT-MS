import { Navbar, Nav, Container } from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { AiOutlineSetting } from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
        <header>
            <Navbar bg='light' variant='light' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand>APT</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id='basic-navbar-nav'>
                        <Nav className='ms-auto'>
                            <LinkContainer to='/dashboard'>
                            <Nav.Link>Dashboard</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/apartments'>
                            <Nav.Link>Apratments</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/tenants'>
                            <Nav.Link>Tenants</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/reports'>
                            <Nav.Link>Reports</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/maintenance'>
                            <Nav.Link>Maintenance</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/settings'>
                            <Nav.Link><AiOutlineSetting /></Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
  )
}

export default Header