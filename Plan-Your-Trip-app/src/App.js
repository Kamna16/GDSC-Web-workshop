import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

  const [tours, setTours] = useState(data); // state variable

  // function to remove a tour
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // if no tour left then display appropriate text
  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      {/* Tour component */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
