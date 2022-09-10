
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';
import { Nosotros } from "./components/Nosotros/nosotros"
import { Contacto } from "./components/Contacto/contacto"
import { Categorias } from './components/Categorias/categorias';
import { Ofertas } from './components/Ofertas/ofertas';


const App = () => {
  
  return (
    
    <div>

        <BrowserRouter>
            
          <Header />

          <Routes>

            <Route path='/' element={  <ItemListContainer/>}/>
            <Route path='/categorias' element={ <Categorias/> }/>
            <Route path='/ofertas' element={ <Ofertas/> }/>
            <Route path='/nosotros' element={ <Nosotros/> }/>
            <Route path='/contacto' element={ <Contacto/> }/>
            {/* <Route path='*' element={ <Error404/> }/> */}
            <Route path='*' element={ <Navigate to="/"/> }/>
              
          </Routes>

          <Footer/>
          
        </BrowserRouter>
             
    </div>
  );
}

export default App;
