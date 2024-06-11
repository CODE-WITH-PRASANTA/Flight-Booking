import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Search from './Component/Search/Search';
import Support from './Component/Support/Support';
import Info from './Component/Info/Info';
import Longe from './Component/Longe/Longe';
import Travellers from './Component/Travellers/Travellers';
import Subscribers from './Component/Subscribers/Subscribers';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <Search />
    <Support />
    <Info />
    <Longe />
    <Travellers />
    <Subscribers />
    <Footer />
    </>
  );
}

export default App;
