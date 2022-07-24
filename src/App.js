import './App.css';
import Header from './components/Header/header';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import HomePage from './pages/homePage';
import CommingSoon from './pages/commingSoon';

function App() {
  return (
    <CommingSoon/>
  );
}

export default App;
