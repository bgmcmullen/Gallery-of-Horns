import './App.css'
import { useState } from "react";
import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import SelectedBeast from './components/SelectedBeast'
import hornedBeastValues from './assets/data.json';
import NumberOfHorns from './components/NumberOfHorns';


function App() {
  let [selectedBeastObject, setSelectedBeastsObject] = useState(hornedBeastValues[0]);

  function addSelectedBeast(newSelectedBeast){  
    setSelectedBeastsObject(hornedBeastValues[newSelectedBeast]);
  }

  const [selectedNumber, setSelectedOption] = useState('All');

  const handleSelectChange = (selection) => {
    setSelectedOption(selection);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let chosenHornedBeastValues

  chosenHornedBeastValues = hornedBeastValues.filter((element) => (element.horns === Number(selectedNumber) || selectedNumber === 'All'));


  return (
    <>
    <Header/>
    <NumberOfHorns handleSelectChange={handleSelectChange}/>
    <Gallery data={chosenHornedBeastValues} addSelectedBeast={addSelectedBeast} handleShow={handleShow}/>
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
