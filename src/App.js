//import logo from './logo.svg';
import './App.css';
import Navbaar from './BaseLayout/Navbar'
import Promo from './Components/promo';
import members from './database/members.js';
import investors from './database/investors.js';
import news from './database/news.js';
import OurTeam from './Components/team.js';
import News from './Components/news.js';
import Feedback from './Components/feedback.js';
import InvestorCarousel from './Components/carousel.js'
import Footer from './BaseLayout/footer.js'

function App() {
  return (
    <>
      <Navbaar/>
      <Promo/>
      <OurTeam members = {members} />
      <InvestorCarousel investors= {investors}/>
      <News news = {news} />
      <Feedback/>
      <Footer/>
    </>
  );
}

export default App;
