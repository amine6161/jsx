import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Description from './amine/Description';
import Image from './amine/Image';
import Name from './amine/Name';
import Price from './amine/price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


  function App() {
    var name = ""
    return (
  <div>
  <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br></br>
  
  {/* <h1>{Product.Name}</h1>
        <h2>{Product.Price}</h2>
        <h3>{Product.Description}</h3>
    <img src={Product.URL} alt='Not Found'/> */}
  
  {/*creating a card */}
  <div className='dali'>
          <Card style={{width: '22rem',textAlign:'center',display:'flex',border:'solid',borderRadius:'20px',padding:'15px'}}>
        <Image/>
        <Card.Body>
          <Card.Title style={{fontFamily:'fantasy',textDecoration : 'underline'}}> <Name/></Card.Title>
          <br/>
          <Card.Text>
          <Price/>
          <br/>
          <Description/>
          </Card.Text>
          <Button variant="primary">Buy</Button>
        </Card.Body>
      </Card>
      </div>
  <br/>
  <br/>
     {/*displaying a message */} 
      <h1>{name === "" ? "Hello, there!" : `Bonjour ${name}`}</h1>   
  </div>
    );
  }
  
  export default App;

