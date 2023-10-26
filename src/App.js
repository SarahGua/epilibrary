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
import SingleBook from './Components/SingleBook';
import BookList from './Components/BookList';
import RomanceBooks from './data/romance.json'

function App() {
  return (
    <div>
      <NavComponent />
      <Welcomecomponent />
      {/* <SingleBook book={RomanceBooks[2]} /> */}
      <BookList manyBooks={RomanceBooks} />
      {/* <FantasyComponent />
      <HistoryComponent />
      <HorrorComponent />
      <RomanceComponent />
      <ScifiComponent /> */}
      <FooterComponent />
    </div>
  );
}

export default App;
