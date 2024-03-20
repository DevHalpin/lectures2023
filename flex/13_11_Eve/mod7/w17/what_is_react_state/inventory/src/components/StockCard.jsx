// singularItem, pluralItem image, price, count


export const StockCard = (props) => {

  //handle the increase and decrease of the count of the particular item in separate functions
  
  const increaseCount = () => {
    const countCopy = { ...props.count };  //make a copy of the count object
    countCopy[props.id]++; //increment the count of the particular item we're accessing
    props.setCount(countCopy); //set the count object to the new copy
  };

  const decreaseCount = () => {
    const countCopy = { ...props.count }; //make a copy of the count object
    countCopy[props.id]--; //decrement the count of the particular item we're accessing
    props.setCount(countCopy); //set the count object to the new copy
  }

  //handle the increase and decrease of the price of the particular item in a single function

  const adjustPrice = (value) => {
    const priceCopy = { ...props.price }; //make a copy of the price object
    priceCopy[props.id] += value; //increment or decrement the price of the particular item we're accessing
    props.setPrice(priceCopy); //set the price object to the new copy
  }

  

  const handleCountChange = (e) => {
    e.preventDefault();
    const countData = new FormData(e.target); //create a new FormData object from the form
    const count = countData.get("count"); //get the value of the input with the name "count"
    const countCopy = { ...props.count }; //make a copy of the count object
    countCopy[props.id] = parseInt(count); //set the count of the particular item we're accessing to the new value
    props.setCount(countCopy); //set the count object to the new copy
  }

  const handlePriceChange = (e) => {
    e.preventDefault();
    const priceData = new FormData(e.target); //create a new FormData object from the form
    const price = priceData.get("price");  //get the value of the input with the name "price"
    const priceCopy = { ...props.price }; //make a copy of the price object
    priceCopy[props.id] = parseInt(price); //set the price of the particular item we're accessing to the new value
    props.setPrice(priceCopy); //set the price object to the new copy
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
