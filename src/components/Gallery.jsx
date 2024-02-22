/* eslint-disable react/prop-types */
import HornedBeast from "./HornedBeast";
import hornedBestValues from '../assets/data.json';

function Gallery(props){
  return(
    <section>
      {hornedBestValues.map((beast) => <HornedBeast title={beast.title} imageUrl={beast.image_url} description={beast.description}/>)};
    </section>
  )

}

export default Gallery