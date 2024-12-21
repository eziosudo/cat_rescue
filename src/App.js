import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';
import JoinUs from './components/JoinUs/JoinUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Carousel />
            </>
          } />
          <Route path="/join" element={<JoinUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
