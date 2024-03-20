import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const colourPalette = ["#fffa6a", "#ffa8a8", "#7ce8f7"];

export const StockStats = (props) => {
  console.log(props);
  const itemCounts = Object.values(props.count);
  const itemPrices = [];

  //loop through the count and price objects and push the values into the array
  for (const item in props.count) {
    itemPrices.push(props.price[item] * props.count[item])
  }
  console.log(itemCounts);
  console.log(itemPrices);
  return (
    <div className="card row row-center">
      <div>
        <p>Total Stock</p>
        <Doughnut
          data={{
            labels: ["Keyboards", "Mice", "Cameras"],
            datasets: [
              {
                id: 1,
                label: "Count",
                data: itemCounts,
                backgroundColor: colourPalette,
              },
            ],
          }}
        />
      </div>
      <div>
        <p>Total Stock Value</p>
        <Doughnut
          data={{
            labels: ["Keyboards", "Mice", "Cameras"],
            datasets: [
              {
                id: 1,
                label: "Price",
                data: itemPrices,
                backgroundColor: colourPalette,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};