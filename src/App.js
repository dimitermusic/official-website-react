import Nav from './components/Nav'
import Landing from './components/Landing'
import Concerts from './components/Concerts'
import Signup from './components/Signup'
import Footer from './components/Footer'

export default function App() {

  return (
    <div className='App'>
      <Nav />
      <Landing />
      <Concerts />
      <Signup />
      <Footer />
    </div>
  );
}
