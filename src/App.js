
import "./App.css";
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { ItemListContainer } from "./components/itemListContainer/itemListContainer"
import Contador from "./components/Contador/Contador"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  
  return (
    <div>
      <Header />
      <Contador max={10}/>
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
