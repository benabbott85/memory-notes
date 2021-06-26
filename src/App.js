import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/footer";
import MaterialNav from "./components/materialnav"
function App() {
  return (
  <>
<Router>
<MaterialNav/>

</Router>

  <Footer/>
  </>
  );
}

export default App;
