import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HornedBeast(props){

  let [favorites, setfavorites] = useState(0);

  function addFavorite() {
    setfavorites(++favorites);
  }
  return(
  <>
    <h2>{props.title}</h2>
    <img onClick={addFavorite} src={props.imageUrl} alt={props.alt}></img>
    <div id="favorites">❤️{favorites}</div>
    <p>{props.description}</p>
  </>
  )



}

export default HornedBeast