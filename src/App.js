import {Route,Routes } from 'react-router-dom';
import './App.css';
import login from './src/login.js';
import Home from './pages/Home' ;
import Contact from './pages/Contact';
import About from './pages/About' ;
import Navbar from './components/Navbar' ;

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='displayBoard'>
        <Routes>
          <Routes index element={<login/>}
          <Routes path="/home" element={<Home/>}/>
          <Routes path ="/contact" element={<Contact/>} />
          <Routes path ="/about" element={<About/>} />
          <Route path ="/movie" element={<Movie/>} />

        </Routes>
      </div>
    </div>
  );
};

export default App;
