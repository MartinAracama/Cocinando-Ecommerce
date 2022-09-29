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
import { LoginProvider } from './Context/LoginContext';
import { LoginScreen } from "./components/LoginScreen/LoginScreen"
import { Checkout } from './components/Checkout/Checkout';

const App = () => {



  return (
    <LoginProvider>
      <CartCustomProvider> 
    
        <BrowserRouter>
            
          <Header />

          <Routes>

            <Route path='/' element={  <ItemListContainer/>}/>
            <Route path='/productos/:categoryId' element={ <ItemListContainer/> }/>
            <Route path='/item/:itemId' element={ <ItemDetailContainer/> }/>
            <Route path='/login' element={ <LoginScreen/> }/>
            <Route path='/cart' element={ <Cart/> }/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='/nosotros' element={ <Nosotros/> }/>
            <Route path='/contacto' element={ <Contacto/> }/>
            
            <Route path='*' element={ <Navigate to="/"/> }/>
              
          </Routes>

          <Footer/>
          
        </BrowserRouter>
             
      </CartCustomProvider>
    </LoginProvider>
  );
}

export default App;
