/* eslint-disable react/prop-types */
import HornedBeast from "./HornedBeast";
import hornedBeastValues from '../assets/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Gallery(props) {

const beastsPerRow = 4; // Number of beasts per row
const numRows = Math.ceil(hornedBeastValues.length / beastsPerRow); // Calculate number of rows

let gridArray = [];

  // Create an array of arrays to represent rows and columns
  for (let i = 0; i < numRows; i++) {
    gridArray.push(hornedBeastValues.slice(i * beastsPerRow, (i + 1) * beastsPerRow));
  }
  console.log(gridArray);

return (
  <Container>
    {gridArray.map((row, rowIndex) => (
      <Row key={rowIndex}>
        {row.map((beast, colIndex) => (
          <Col key={colIndex} xs={12} sm={6} md={3}>
            <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description} />
          </Col>
        ))}
      </Row>
    ))}
  </Container>
);
}

export default Gallery