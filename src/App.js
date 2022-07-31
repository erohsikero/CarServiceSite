import './App.css';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
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
        <body class="d-flex flex-column min-vh-100">HI</body>
      </div>
    </Router>
    <Footer class="mt-auto"/>
    </>
  );
}

export default App;
