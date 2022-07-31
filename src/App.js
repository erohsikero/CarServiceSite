import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import OurService from './components/OurService/OurService';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/homePage';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/home" element = { <HomePage/> }/>
          <Route path="/" element = { <HomePage/> }/>
        </Routes>
      </div>
      <OurService/>
    </Router>
    <Footer class="mt-auto"/>
    </>
  );
}

export default App;
