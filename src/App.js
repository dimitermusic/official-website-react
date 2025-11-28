import Nav from "./components/Nav";
import Landing from "./components/Landing";
import Video from "./components/Video";
import Concerts from "./components/Concerts";
import AdvancedDiscography from "./components/AdvancedDiscography";
import FilmCredits from "./components/FilmCredits";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App" id="home">
      <Nav />
      <Landing />
      <FilmCredits />
      <Video />
      <Concerts />
      <AdvancedDiscography />
      <Signup />
      <Footer />
    </div>
  );
}
