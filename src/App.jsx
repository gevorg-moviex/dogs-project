import "./App.css";
import { useState } from "react";
import BreedNames from './Components/Breed_Names/names';
import BreedImages from './Components/Breed_Images/images';

function App() {
  const [selectedBreed, setSelectedBreed] = useState(null);
  const [active, setActive] = useState(null);
  const [breedInfo, setBreedInfo] = useState(null);

  const handleClick = async (breed) => {
    setSelectedBreed(breed);
    setActive(breed)
    try {
      const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
      const data = await response.json();
      setBreedInfo(data.message);
    } catch (error) {
      console.error('Error fetching breed info:', error);
    }
  };

  return (
    <>
      <BreedNames onBreedClick={handleClick} activeBreed={active} />
      <BreedImages selectedBreed={selectedBreed} breedInfo={breedInfo} />
    </>
  );
}

export default App;
