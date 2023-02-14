import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function TextLinkExample({Name}) {
  return (
    <div>
    <Navbar style={{backgroundColor:'blue'}}>
      <Container>
        <Navbar.Brand href="#home"><h3 style={{color:'white'}}>Dashboard</h3></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text style={{color:'white',fontSize:'1.5em',display:'flex',alignItems:'center'}}>
           <img style={{width:'50px', height:'50px',borderRadius:'50%', objectFit:'cover',marginRight:'15px'}} src={Name.img}/>{Name.name}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default TextLinkExample;