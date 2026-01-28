/* src/App.jsx */
import { useState } from "react";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import Header from "./components/Header";


export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50">
      <Header />
      {!selected ? (
        <Home onSelect={setSelected} />
      ) : (
        <PropertyDetail
          property={selected}
          onBack={() => setSelected(null)}
        />
      )}
    </div>
  );
}
