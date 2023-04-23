import { useState } from "react";
import Axios from "axios";
function App() {
  const [MedInc, setMedInc] = useState(null);
  const [HouseAge, setHouseAge] = useState(null);
  const [AveRooms, setAveRooms] = useState(null);
  const [AveBedrms, setAveBedrms] = useState(null);
  const [Population, setPopulation] = useState(null);
  const [AveOccup, setAveOccup] = useState(null);
  const [Latitude, setLatitude] = useState(null);
  const [Longitude, setLongitude] = useState(null);
  const [price, setPrice] = useState(null);

  const predict = (e) => {
    e.preventDefault();
    Axios.post("http://127.0.0.1:8000/priceprediction", {
      MedInc,
      HouseAge,
      AveRooms,
      AveBedrms,
      Population,
      AveOccup,
      Latitude,
      Longitude,
    }).then(res => setPrice(res.data.prediction)).catch(err=> console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="image"></div>
        <div className="app">
          <h1 className="text-xl underline">
            California House Price Predictor
          </h1>
          <div className="input-container">
            <div className="left-input">
              <div>
                <label htmlFor="Meadian Income">Median Income</label>
                <input
                  type="number"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={MedInc}
                  onChange={(e) => setMedInc(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Meadian Income">House Age</label>
                <input
                  type="number"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={HouseAge}
                  onChange={(e) => setHouseAge(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Meadian Income">Average Rooms</label>
                <input
                  type="number"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={AveRooms}
                  onChange={(e) => setAveRooms(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Meadian Income">Average Bedrooms</label>
                <input
                  type="text"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={AveBedrms}
                  onChange={(e) => setAveBedrms(e.target.value)}
                />
              </div>
            </div>
            <div className="right-input">
              <div>
                <label htmlFor="Meadian Income">Population</label>
                <input
                  type="text"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={Population}
                  onChange={(e) => setPopulation(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Meadian Income">Average Occupancy</label>
                <input
                  type="text"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={AveOccup}
                  onChange={(e) => setAveOccup(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Meadian Income">Latitude</label>
                <input
                  type="text"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={Latitude}
                  onChange={(e) => setLatitude(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="Meadian Income">Longitude</label>
                <input
                  type="text"
                  name="Meadian Income"
                  id=""
                  className="inputStyling"
                  value={Longitude}
                  onChange={(e) => setLongitude(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className="" onClick={(e) => predict(e)}>
            predict
          </button>
          <p>
            {price?price:""}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
