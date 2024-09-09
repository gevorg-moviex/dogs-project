import "./App.css";
import { useState } from "react";
import BreedNames from './Components/Breed_Names/names';
import BreedImages from './Components/Breed_Images/images';
import Themes from "./Components/Themes/themes";

function App() {
  const [active, setActive] = useState([]);
  const [breedInfo, setBreedInfo] = useState({});

  const handleClick = async (breed) => {
    if (active.includes(breed)) {
      setActive(active.filter(item => item !== breed));
      setBreedInfo(prevInfo => {
        const newInfo = { ...prevInfo };
        delete newInfo[breed];
        return newInfo;
      });
    } else {
      setActive([...active, breed]);

      try {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const data = await response.json();
        setBreedInfo(prevInfo => ({ ...prevInfo, [breed]: data.message }));
      } catch (error) {
        console.error('Error fetching breed info:', error);
      }
    }
  };

  return (
    <>
      <Themes />
      <BreedNames onBreedClick={handleClick} namesActive={active} />
      <BreedImages breedInfo={breedInfo} actives={active} />
    </>
  );
}

export default App;
