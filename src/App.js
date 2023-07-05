import Navbar from "./components/navbar";
import Iletisim from "./components/iletisim";
import PersonelKadro from "./components/personelKadro";
import Footer from "./components/footer";
import Vizyon from "./components/vizyon";
import Map from "./components/Map";
import DyoRenk from "./components/dyoRenk";

function App() {
  
  return (
    <div className="App">
      <Navbar />

      <Vizyon />

      

      <Iletisim />

      <Map />

      <Footer />
    </div>
  );
}

export default App;
