import "./App.css";
import { NewTable } from "./components/NewTable/NewTable";
import { DataCats } from "./Data/DataCats";
import { DataColumnCats } from "./Data/DataColumnCats";
import { DataCars } from './Data/DataCars';
import { DataColumnCars } from "./Data/DataColumnCar";

function App() {
  return (
    <div>
      <NewTable data={DataCats} columns={DataColumnCats} />
      <NewTable data={DataCars} columns={DataColumnCars}></NewTable>
    </div>
  );
}

export default App;
