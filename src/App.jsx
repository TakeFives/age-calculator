import { AgeProvider } from "./context/AgeContext";

import Form from "./components/featured/Form";
import Results from "./components/featured/Results";
import "./App.css";

function App() {
  return (
    <AgeProvider>
      <>
        <Form />
        <Results />
      </>
    </AgeProvider>
  );
}

export default App;
