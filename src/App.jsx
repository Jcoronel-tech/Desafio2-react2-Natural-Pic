import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./styles.css";
import Context from "./Context";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import InfoPoke from  "./views/InfoPoke"
import NotFound from "./components/NotFound";

const App = () => {
  const [info, setInfo] = useState([]);
  const [id, setId] = useState("");
  const [filterPoke, setFilterPoke] = useState([]);
  const globalState = {info, setInfo, id, setId, filterPoke, setFilterPoke};

  return (
    <div className="App">
      <Context.Provider value={globalState}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path='/pokemones/:id' element={<InfoPoke />} />
            <Route path="*" element={<NotFound />} />
          </Routes> 
        </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
export default App
