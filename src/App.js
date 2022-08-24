
import "./App.css";
import { Header } from "./components/header/header"
import { Footer } from "./components/footer/footer"
import {Main} from "./components/main/main"

const App = () => {

  return (
    <div>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
