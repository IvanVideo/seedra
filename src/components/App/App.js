import react from "react";
import '../../vendor/fonts.css';
import Header from '../Header/Header';
import Bunner from '../Bunner/Bunner';
import Publicity from '../Publicity/Publicity';
import Products from '../Products/Products';

function App() {
  return (
    <div>
      <Header />
      <Bunner />
      <Publicity />
      <Products />
    </div>
  );
}

export default App;
