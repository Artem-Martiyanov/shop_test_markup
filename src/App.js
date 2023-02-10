import './styles/app.css'
import Slider from "./components/Slider/Slider";
import product from "./data/product";
import Button from "./components/UI/button/Button";
import Select from "./components/UI/select/Select";


function App() {


    return (
        <div className="App">
            <Slider product={product}/>
            <Button>В корзину</Button>
            <Select options={product.sizes}/>
        </div>
    );
}

export default App;
