import { Routes, Route } from 'react-router-dom';
import Home from './components/shared/Home';
// import Profile from './components/contacts/Profile';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import About from './components/shared/About';
import Contact from './components/contacts/Contact';

const App = () => (
  <>
    <Navbar />
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
    </>
  </>
)

export default App;
