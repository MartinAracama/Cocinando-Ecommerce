
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { ItemListContainer } from "./components/itemListContainer/itemListContainer";
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


const App = () => {
  
  return (
    
    <div>
      <BrowserRouter>
        
        <Header />
          
        <Routes>
          <Route path="/" element={ <ItemListContainer/> } />
          <Route path="*" element={ <Navigate to="/"/> } />
        </Routes>
      
        
        <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
