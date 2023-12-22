
import './App.css';
import Header from './components/Header';
// import Body from './components/Body';
import Footer from './components/Footer';
import MineToMill from './components/MineToMill'
import Sustainability from './components/Sustainability'
import MineralProcessing from './components/MineralProcessing'
import OilGas from './components/OilGas'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Body/> */}
      <MineToMill/>
      <Sustainability/>
      <MineralProcessing/>
      <OilGas/>
      <Footer/>
    </div>
  );
}

export default App;
