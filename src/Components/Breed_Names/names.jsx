import "./names.css"
import { useState, useEffect } from "react";

export default function BreedNames({ onBreedClick, namesActive }){
    const [dogs, setDogs] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/list/all/random/10");
                const data = await response.json();
                const breedNames = Object.keys(data.message);
                setDogs(breedNames);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            };
            
            fetchData();  
        }, []);

      return (
        <ul>
            {dogs.map((item, index) => (
            <li key={index} onClick={() => onBreedClick(item)}
            style={{
                border: namesActive.includes(item) ? "1px solid orange" : "1px solid blue",
                transition: "all 0.4s"
            }}
            >
                {item[0].toUpperCase() + item.slice(1)}
            </li>
            ))}
            {console.log(dogs)}
        </ul>
    )
}