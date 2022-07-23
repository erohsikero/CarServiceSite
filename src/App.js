import './App.css';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/homePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/home" element = { <HomePage/> }/>
          <Route path="/" element = { <HomePage/> }/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
