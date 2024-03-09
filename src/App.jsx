import './App.css'
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import SelectedBeast from './components/SelectedBeast'
import hornedBeastValues from './assets/data.json';


function App() {
  let [selectedBeastObject, setSelectedBeastsObject] = useState(hornedBeastValues[0]);

  function addSelectedBeast(newSelectedBeast){  
    setSelectedBeastsObject(hornedBeastValues[newSelectedBeast]);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Header/>
    <Gallery data={hornedBeastValues} addSelectedBeast={addSelectedBeast} handleShow={handleShow}/>
    <Footer/>
    <SelectedBeast         
        title={selectedBeastObject.title}
        imageUrl={selectedBeastObject.image_url}
        description={selectedBeastObject.description}
        handleClose={handleClose}
        handleShow={handleShow}
        show={show}
      />
    </>
  )
}

export default App
