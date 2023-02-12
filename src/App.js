import './styles/app.css'
import Slider from "./components/Slider/Slider";
import product from "./data/product";
import Button from "./components/UI/button/Button";
import Select from "./components/UI/select/Select";
import LikeButton from "./components/UI/likeButton/LikeButton";
import SizeList from "./components/UI/sizeList/SizeList";


function App() {

    return (
        <div className="App">
            <Slider product={product}/>
            <Button>В корзину</Button>
            <Select options={product.sizes} name={'size'}/>
            <LikeButton />
            <SizeList sizes={product.sizes}/>
        </div>
    );
}

export default App;
