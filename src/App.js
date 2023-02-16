import './styles/app.css'
import Slider from "./components/Slider/Slider";
import product from "./product";
import Button from "./components/UI/button/Button";
import Select from "./components/UI/select/Select";
import LikeButton from "./components/UI/likeButton/LikeButton";
import SizeList from "./components/UI/sizeList/SizeList";
import Features from "./components/UI/features/Features";
import ExitBtn from "./components/UI/exitBtn/ExitBtn";
import BreadCrumbs from "./components/UI/breadCrumbs/BreadCrumbs";


function App() {
    const splitDigits = (price) => price.toString().replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, '$& ')

    return (
        <div className="App">
            <BreadCrumbs/>
            <header className='product__header'>
                <div className='product__top'>
                    <h1 className='product__title'>{product.name}</h1>
                    <ExitBtn/>
                </div>
                <span className='product__price'>{splitDigits(product.price)} руб.</span>

            </header>
            <section className='product__interactive'>
                <Select options={product.sizes} name={'size'}/>
                <Button>В корзину</Button>
                <LikeButton/>
                <SizeList sizes={product.sizes}/>
                <a href='#' className='product__link'>Как выбрать размер?</a>
            </section>
            <Slider images={product.images}/>
            <div className='product__description'>{product.description}</div>
            <Features features={product.features}/>
        </div>
    );
}

export default App;
