import "./App.css";
import { useState } from "react";
import BreedNames from './Components/Breed_Names/names';
import BreedImages from './Components/Breed_Images/images';

function App() {
  const [active, setActive] = useState([]);
  const [breedInfo, setBreedInfo] = useState({});

  const handleClick = async (breed) => {
    if (!active.includes(breed)) {
      setActive([...active, breed]);
    }
    
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();
      setBreedInfo(prevInfo => ({ ...prevInfo, [breed]: data.message }));
    } catch (error) {
      console.error('Error fetching breed info:', error);
    }
  };

  return (
    <>
      <BreedNames onBreedClick={handleClick} activeBreed={active} />
      <BreedImages breedInfo={breedInfo} actives={active} />
    </>
  );
}

export default App;
