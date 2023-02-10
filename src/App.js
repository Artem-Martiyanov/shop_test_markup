import './styles/app.css'
import Slider from "./components/Slider/Slider";
import product from "./data/product";
import Button from "./components/UI/button/Button";

function App() {


    return (
        <div className="App">
            <Slider product={product}/>
            <Button>В корзину</Button>
        </div>
    );
}

export default App;
