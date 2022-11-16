import "./App.css";
import { NewTable } from "./components/NewTable/NewTable";
import { DataCats } from "./Data/DataCats";
import { DataColumnCats } from "./Data/DataColumnCats";

function App() {
  return (
    <div>
      <NewTable data={DataCats} columns={DataColumnCats} />
    </div>
  );
}

export default App;
