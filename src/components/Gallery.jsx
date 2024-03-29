/* eslint-disable react/prop-types */
import HornedBeast from "./HornedBeast";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



function Gallery(props) {

return (
  <Container>
      <Row  xs={2} sm={2} md={3} lg={4}>
        {props.data.map((beast, index) => (
          <HornedBeast _id={beast._id} key={index} index={index} title={beast.title} imageUrl={beast.image_url} description={beast.description} addSelectedBeast={props.addSelectedBeast} showModal={props.handleShow}/>
        ))}
      </Row>
    </Container>
);
}

export default Gallery