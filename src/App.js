import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error from './pages/Error';
import Topbar from './Components/Topbar';
import Contact from './pages/Contact';
import Footer from './Components/Footer';
import About from './Components/About';
import Placements from './pages/Placements';
import Klesociety from './pages/Klesociety';
import Klebca from './pages/Klebca';
import Faculty from './pages/Faculty';
import Specializations from './pages/Specializations';
import Academyalliances from './pages/Academyalliances';
import News from './pages/News';
import Events from './pages/Events';
import Workshops from './pages/Workshops';
import Layout from './pages/Layout';
import Gallery from './pages/Gallery';

function App() {
  return (
    <>
      <Topbar />
      <Routes>
        <Route path='/rlsbca' element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/about/kle-society' element={<Klesociety />} />
          <Route exact path='/about/kle-bca' element={<Klebca />} />
          {/* <Route exact path='/academics/bca-syllabus' element={<Bcasyllabus />} /> */}
          <Route exact path='/academics/specializations' element={<Specializations />} />
          <Route exact path='/academics/academy-alliances' element={<Academyalliances />} />
          <Route exact path='/placements' element={<Placements />} />
          <Route exact path='/faculty' element={<Faculty />} />
          <Route exact path='/happenings/news' element={<News />} />
          <Route exact path='/happenings/events' element={<Events />} />
          <Route exact path='/happenings/workshops' element={<Workshops />} />
          <Route exact path='/gallery' element={<Gallery />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
