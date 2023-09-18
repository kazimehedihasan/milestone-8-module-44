import "./App.css";
// eslint-disable-next-line no-unused-vars
import Navebar from "./components/Navebar/Navebar";
import NewBar from "./components/NewBar/NewBar";
import PriceOptions from "./components/priceOptions/PriceOptions";

function App() {
  return (
    <>
      {/* <Navebar></Navebar> */}

      <NewBar></NewBar>
      <PriceOptions></PriceOptions>
    </>
  );
}

export default App;
