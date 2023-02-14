import {BrowserRouter,Routes, Route} from "react-router-dom";
import Add from "./Add";
import './App.css';
import First from "./First";

import Home from "./Home";
import Navbar from "./Navbar";


function App() {
  return (
    <BrowserRouter>
	<Navbar/>
    <div className="App">
      <Routes>
	  <Route exact path ="/" element={<First/>}/>
        <Route  path ="/home" element={<Home/>}/>
		<Route  path ="/add" element={<Add/>}/>
        
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
