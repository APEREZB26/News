import "./App.css";
import { Header } from "./components/Header";
import { Prices } from "./components/Prices";
import { useEffect, useState } from "react";
import { getAllPrices } from "./services/getAllPrices";

function App() {
  const [price, setPrice] = useState([]);

  useEffect(() => {
    getAllPrices().then((getprice) => {
      setPrice(getprice);
      console.log("Refrescando");
    });
  },[]);
  return (
    <div className="App">
      <Header />
      <div className="prices">
        {price.map((res) => {
          return (
            <Prices
              key={res.id}
              name={res.name}
              price={res.current_price}
              image={res.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
