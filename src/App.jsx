import { useState } from "react";
import SearchBar from "./SearchBar";
import BookData from "./Data.json";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <SearchBar placeholder="Enter a Book Name..." bookData={BookData} />
    </div>
  );
}

export default App;
