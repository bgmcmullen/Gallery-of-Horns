/* eslint-disable react/prop-types */
import HornedBeast from "./HornedBeast";
import hornedBeastValues from '../assets/data.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Gallery() {

return (
  <Container>
      <Row xs={12} sm={4} md={3} lg={2}>
        {hornedBeastValues.map((beast, index) => (
          <HornedBeast key={index} title={beast.title} imageUrl={beast.image_url} description={beast.description} />
        ))}
      </Row>
    </Container>
);
}

export default Gallery