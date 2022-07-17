import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path='/Home' element= {<Home/>}></Route>
      <Route exact path='/' element= {<Home/>}></Route>
      <Route exact path='/About' element= {<About/>}></Route>
      <Route exact path='/Resume' element= {<Resume/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
