import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function HornedBeast(props){

  console.log(window.innerWidth);

  let [favorites, setfavorites] = useState(0);

  function addFavorite() {
    setfavorites(++favorites);
  }

  return(
    <Col>
      <Card style={{
        border: '1px solid white', }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" onClick={() => {
            addFavorite();
            props.addSelectedBeast(props.index);
            props.showModal();
            }} src={props.imageUrl} alt={props.alt}/>
          <div id="favorites">❤️{favorites}</div>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )



}

export default HornedBeast