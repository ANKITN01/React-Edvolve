import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Card style={{ }}>
      {/* <Card.Img variant="top" src="Nature1" /> */}
      <img src={props.nature}  alt='dfd'></img>
      
      <Card.Body>
        <Card.Title><h5>{props.date}</h5></Card.Title>
        <Card.Text>
          {props.data}
        </Card.Text>
        <Button className='btn btn-success' variant="primary">Join Now</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;