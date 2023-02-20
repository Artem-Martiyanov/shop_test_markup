import './styles/app.css'
import {Routes, Route} from "react-router-dom";
import ProductPage from "./pages/ProductPage/ProductPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import HowChoose from "./pages/HowChoose";
import product from "./product";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/product" element={<ProductPage product={product}/>}/>
                <Route path="/product/howtochoose" element={<HowChoose/>}/>
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
