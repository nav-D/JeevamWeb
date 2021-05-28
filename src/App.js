//import logo from './logo.svg';
import './App.css';
import {Container} from 'reactstrap';
import Navbaar from './BaseLayout/Navbar'
import Promo from './Components/promo';
import members from './database/members.js';
import news from './database/news.js';
import OurTeam from './Components/team.js';
import News from './Components/news.js';
import Feedback from './Components/feedback.js';

function App() {
  return (
    <>
      <Navbaar/>
      <Promo/>
      <OurTeam members = {members} />
      <News news = {news} />
      <Feedback/>
    </>
  );
}

export default App;
