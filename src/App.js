import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavComponent from './Components/NavComponent';
import FooterComponent from './Components/FooterComponent';
import Welcomecomponent from './Components/WelcomeComponent';
import FantasyComponent from './Components/FantasyComponent';
import HistoryComponent from './Components/HistoryComponent';
import HorrorComponent from './Components/HorrorComponent';
import RomanceComponent from './Components/RomanceComponent';
import ScifiComponent from './Components/ScifiComponent';

function App() {
  return (
    <div>
      <NavComponent />
      <Welcomecomponent />
      <FantasyComponent />
      <HistoryComponent />
      <HorrorComponent />
      <RomanceComponent />
      <ScifiComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
