import logo from './logo.svg';
import './App.css';
import { Header,Footer } from './containers';
import { Navbar, Marquee, UpcomingEvent,CoreTeam,VideoPerformances,Recognitions,MediaPartners,SocialFollow,AllEvents} from './components';

function App() {
  return (
    <>
    <div className="App">
      <div className="gradient__bg">
        <Marquee/>
        <Navbar />
        <AllEvents/>
        <VideoPerformances/>
        <Header />
        <SocialFollow/>
        <CoreTeam/>
        <Recognitions/>
        <MediaPartners/>
        <Footer/>
      </div>
    </div>
  
    </>
  );
}

export default App;
