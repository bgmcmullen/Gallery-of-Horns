/* eslint-disable react/prop-types */
import HornedBeast from "./HornedBeast"

function Gallery(props){
  return(
  <>
  <HornedBeast title={props.imagesArray[0].title} imageUrl={props.imagesArray[0].image_url} description={props.imagesArray[0].description}/>
  <HornedBeast title={props.imagesArray[1].title} imageUrl={props.imagesArray[1].image_url} description={props.imagesArray[1].description}/>
  <HornedBeast title={props.imagesArray[2].title} imageUrl={props.imagesArray[2].image_url} description={props.imagesArray[2].description}/>
  </>
  )

}

export default Gallery