import "./images.css"

export default function BreedImages( { selectedBreed, breedInfo } ){
    return (
        <>
            {selectedBreed && (
                <div className='breed-img'>
                    <h2>{selectedBreed}</h2>
                    <div>
                    {breedInfo ? (
                        <div className='breed-child'>
                        {breedInfo.slice(0, 5).map((image, index) => (
                            <img key={index} src={image} alt={selectedBreed} style={{ width: '140px', height: '140px', margin: '5px', objectFit: "cover"}} />
                        ))}
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                    </div>
                </div>
            )}
        </> 
    )
}