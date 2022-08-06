import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Card style={{ }}>
      {/* <Card.Img variant="top" src="Nature1" /> */}
      <img src={props.nature} alt='dfd'></img>
      
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;