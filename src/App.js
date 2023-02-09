import {useState} from "react";
import './styles/app.css'
import Slider from "./components/Slider/Slider";
import product from "./data/product";

function App() {


    return (
        <div className="App">
            <Slider product={product}/>
        </div>
    );
}

export default App;
