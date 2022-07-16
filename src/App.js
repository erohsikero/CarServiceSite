import './App.css';
import Header from './components/Header/header';
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
      </div>
    </Router>
  );
}

export default App;
