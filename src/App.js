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
            <BreadCrumbs/>
            <Features/>
            <Slider images={product.images}/>
            <header className='product__header'>
                <h1 className='product__title'>{product.name}</h1>
                <span className='product__price'>{product.price} руб.</span>
            </header>
            <ExitBtn/>
            <section className='product__interactive'>
                <Select options={product.sizes} name={'size'}/>
                <Button>В корзину</Button>
                <SizeList sizes={product.sizes}/>
                <a href='#' className='product__link'>Как выбрать размер?</a>
            </section>
            <LikeButton/>
            <p className='product__description'>{product.description}</p>
        </div>
    );
}

export default App;
