
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import { ItemListContainer } from "./components/itemListContainer/itemListContainer"



const App = () => {
  
  return (
    <div>
      <Header />
      <ItemListContainer/>
      <Footer/>
    </div>
  );
}

export default App;
