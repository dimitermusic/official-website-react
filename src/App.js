import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Video from "./components/Video";
import Concerts from "./components/Concerts";
import Discography from "./components/Discography";
import FilmCredits from "./components/FilmCredits";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="App" id="home">
      <Navigation />
      <Landing />
      <FilmCredits />
      <Video />
      <Concerts />
      <Discography />
      <Signup />
      <Footer />
    </div>
  );
}
