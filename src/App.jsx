import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { products } from "./File_Mock/Product";
import { AllProducts } from "./File_Mock/AllProducts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home prod={products}/>} />
      <Route path="/products" element={<Home prod={AllProducts}/>} />
    </Routes>
  );
}

export default App;