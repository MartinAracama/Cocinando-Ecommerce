
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { Nosotros } from "./components/Nosotros/nosotros"
import { Contacto } from "./components/Contacto/contacto"
import { CartCustomProvider } from "./Context/CartContext";

import { Cart } from './components/Cart/cart';


const App = () => {



  return (
    <CartCustomProvider> 
    
        <BrowserRouter>
            
          <Header />

          <Routes>

            <Route path='/' element={  <ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/nosotros' element={ <Nosotros/> }/>
            <Route path='/contacto' element={ <Contacto/> }/>
            
            <Route path='*' element={ <Navigate to="/"/> }/>
              
          </Routes>

          <Footer/>
          
        </BrowserRouter>
             
    </CartCustomProvider>
  );
}

export default App;
