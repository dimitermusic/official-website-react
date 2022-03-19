import Nav from './components/Nav'
import Landing from './components/Landing'
import Video from './components/Video'
import Concerts from './components/Concerts'
import Signup from './components/Signup'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className='App'>
      <Nav />
      <Landing />
      <Video />
      <Concerts />
      <Signup />
      <Footer />
    </div>
  );
}
