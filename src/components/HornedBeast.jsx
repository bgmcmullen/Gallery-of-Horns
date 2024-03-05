import { useState, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';


function HornedBeast(props){

  console.log(window.innerWidth);

  let [favorites, setfavorites] = useState(0);

  function addFavorite() {
    setfavorites(++favorites);
  }

  // State to store the window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect hook to set up event listener for window resize events
  useEffect(() => {
    function handleResize() {
      // Update the window width state with the new inner width
      setWindowWidth(window.innerWidth);
    }

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up function to remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once on component mount

  // Define a function to calculate the width dynamically based on the window width
  function calculateWidth() {
    // Add your logic here to calculate the desired width based on the window width or other factors
    // For example, you can adjust the width based on breakpoints

    if (windowWidth >= 1200) {
      return '284px';
    } else if (windowWidth >= 800) {
      console.log('bang')
      return `${(windowWidth-64)/4}px`; // Example: return a fixed width of 100px for large screens
    } else if (windowWidth >= 600){
      return `${(windowWidth-64)/3}px`; // Example: return a fixed width of 50px for other screens
    } else {
      return`${(windowWidth-64)/2}px`
      }
  }

  return(
    <Col style={{ width: calculateWidth(), height: '300px'}}>
      {/* Use the calculated width dynamically */}
      <Card>
      <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Img variant="top" onClick={addFavorite} src={props.imageUrl} alt={props.alt}></Card.Img>
          <div id="favorites">❤️{favorites}</div>
          <Card.Text>{props.description}</Card.Text>
          </Card.Body>
      </Card>
    </Col>
  )



}

export default HornedBeast