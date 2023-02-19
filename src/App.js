import './styles/app.css'
import Slider1 from "./components/Slider/Slider1";
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
                <div className='product__buttons'>
                    <Select options={product.sizes} name={'size'}/>
                    <div className='bin__buttons'>
                        <Button>В корзину</Button>
                        <LikeButton/>
                    </div>
                </div>
                <div className='product__size-list'>
                    <SizeList sizes={product.sizes}/>
                    <a href='#' className='product__link'>Как выбрать размер?</a>
                </div>
            </section>
            <Slider1 images={product.images}/>
            <div className='product__description'>{product.description}</div>
            <Features features={product.features}/>
        </div>
    );
}

export default App;
