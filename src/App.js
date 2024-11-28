import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/view/Home';
import About from './components/view/About';
import Footer from './components/common/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
