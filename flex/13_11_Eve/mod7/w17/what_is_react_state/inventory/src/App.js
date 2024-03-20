import "./App.css";
import { StockCard } from "./components/StockCard";
import { StockStats } from "./components/StockStats";
import { useState } from "react";

function App() {
  const [showStats, setShowStats] = useState(false);

  const itemsData = [{
    id: "keyboard",
    singularItem: "Keyboard",
    pluralItem: "Keyboards",
    image: "keyboard.svg",
    count: 1,
    price: 30,
  },
  {
    id: "mouse",
    singularItem: "Mouse",
    pluralItem: "Mice",
    image: "mouse.svg",
    count: 1,
    price: 40,
  },
  {
    id: "camera",
    singularItem: "Camera",
    pluralItem: "Cameras",
    image: "web-cam.svg",
    count: 1,
    price: 60,
  }]

  const defaultCount = {}
  const defaultPrices = {}

  for (const item of itemsData) {
    defaultCount[item.id] = item.count;
    defaultPrices[item.id] = item.price;
  }
  
  const [count, setCount] = useState(defaultCount);
  const [price, setPrice] = useState(defaultPrices);

  // old way of making array of JSX items
  // const stockItems = []

  // for (const item of items) {
  //   stockItems.push(
  //     <StockCard
  //       singularItem={item.singularItem}
  //       pluralItem={item.pluralItem}
  //       image={item.image}
  //       price={item.price}
  //       count={count[item.pluralItem.toLowerCase()]}
  //       setCount={setCount}
  //     />
  //   )
  // }

  // new way of making array of JSX items
  const stockItems = itemsData.map((item) => {
    return (
      <StockCard
        key={item.id}
        id={item.id}
        singularItem={item.singularItem}
        pluralItem={item.pluralItem}
        image={item.image}
        count={count}
        setCount={setCount}
        price={price}
        setPrice={setPrice}
      />
    )
  })

  return (
    <>
      <header>
        <h1>Inventory Tracker</h1>
      </header>
      <main>
        <section>
          <h2>Stock Items</h2>
          <div className="row">
            {stockItems}
          </div>
        </section>
        <section>
          <h2>
            Stats <button onClick={() => setShowStats(!showStats)}>{showStats ? "Hide Stats" : "Show Stats"}</button>
          </h2>
          {showStats && <StockStats count={count} price={price}/>}
        </section>
      </main>
    </>
  );
}

export default App;