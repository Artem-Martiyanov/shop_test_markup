import './styles/app.css'
import Slider from "./components/Slider/Slider";
import product from "./data/product";
import Button from "./components/UI/button/Button";
import Select from "./components/UI/select/Select";
import LikeButton from "./components/UI/likeButton/LikeButton";
import SizeList from "./components/UI/sizeList/SizeList";
import Features from "./components/UI/features/Features";
import ExitBtn from "./components/UI/exitBtn/ExitBtn";
import BreadCrumbs from "./components/UI/breadCrumbs/BreadCrumbs";


function App() {

    return (
        <div className="App">
            <Slider images={product.images}/>
            <Button>В корзину</Button>
            <Select options={product.sizes} name={'size'}/>
            <LikeButton />
            <SizeList sizes={product.sizes}/>
            <Features/>
            <ExitBtn/>
            <BreadCrumbs/>
        </div>
    );
}

export default App;
