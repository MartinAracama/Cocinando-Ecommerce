
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { ItemDetailContainer } from './components/itemDetailContainer/itemDetailContainer';


const App = () => {
  
  return (
    
    <div>
             
        <Header />
                  
        <ItemDetailContainer idProducto={1}/>      
      
        <ItemListContainer/> 
      
        <Footer/>
      
      
    </div>
  );
}

export default App;
