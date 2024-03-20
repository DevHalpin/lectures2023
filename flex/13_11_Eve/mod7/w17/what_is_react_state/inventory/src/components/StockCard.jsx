// singularItem, pluralItem image, price, count


export const StockCard = (props) => {
  
  const increaseCount = () => {
    const countCopy = { ...props.count };
    countCopy[props.id]++;
    props.setCount(countCopy);
  };

  const decreaseCount = () => {
    const countCopy = { ...props.count };
    countCopy[props.id]--;
    props.setCount(countCopy);
  }

  const adjustPrice = (value) => {
    const priceCopy = { ...props.price };
    priceCopy[props.id] += value;
    props.setPrice(priceCopy);
  }

  const handleCountChange = (e) => {
    e.preventDefault();
    const countData = new FormData(e.target);
    const count = countData.get("count");
    const countCopy = { ...props.count };
    countCopy[props.id] = parseInt(count);
    props.setCount(countCopy);
  }

  const handlePriceChange = (e) => {
    e.preventDefault();
    const priceData = new FormData(e.target);
    const price = priceData.get("price");
    const priceCopy = { ...props.price };
    priceCopy[props.id] = parseInt(price);
    props.setPrice(priceCopy);
  }

  return (
    <article className="card flow">
      <h3>{props.pluralItem}</h3>
      <img src={props.image} alt={props.singularItem} height="160px" />
      <div>
        <p>Current Stock: {props.count[props.id]}</p>
        <div className="row row-item-grow">
          <button onClick={increaseCount}>↑ Add {props.pluralItem}</button>
          <button onClick ={decreaseCount}>↓ Remove {props.pluralItem}</button>
        </div>
        <form className="row row-item-grow" onSubmit={handleCountChange}>
          <input type="number" name="count" placeholder="Enter amount" />
          <button type="submit">Adjust {props.pluralItem}</button>
        </form>
        <p>Current Value: {props.price[props.id]}</p>
        <div className="row row-item-grow">
          <button onClick={() => adjustPrice(1)}>↑ Increase Price</button>
          <button onClick={() => adjustPrice(-1)}>↓ Decrease Price</button>
        </div>
        <form className="row row-item-grow" onSubmit={handlePriceChange}>
          <input type="number" name="price" placeholder="Enter amount" />
          <button type="submit">Adjust Price</button>
        </form>
      </div>
    </article>
  );
};
