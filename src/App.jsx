import "./App.css";
// eslint-disable-next-line no-unused-vars
import Navebar from "./components/Navebar/Navebar";
import NewBar from "./components/NewBar/NewBar";
import LineCharts from "./components/PriceOptions/PriceOption/LineCharts/LineCharts";
import Phone from "./components/PriceOptions/PriceOption/LineCharts/Phone/Phone";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <Navebar></Navebar> */}

      <NewBar></NewBar>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <Phone></Phone>
    </>
  );
}

export default App;
