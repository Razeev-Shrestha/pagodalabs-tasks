import "./App.css";

import { AppProvider } from "./context/AppContext";
import { DataTable } from "./components/DataTable";
import { Form } from "./components/Form";

function App() {
  return (
    <section>
      <h1 className="title">Pagodalabs Tasks</h1>
      <AppProvider>
        <DataTable />
        <Form />
      </AppProvider>
      <p>Note:Not any storing mechanism is used to store the data&apos;s.</p>
    </section>
  );
}

export default App;
