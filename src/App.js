import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Carousel />
    </div>
  );
}

export default App;
