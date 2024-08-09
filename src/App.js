import "./App.css";
import Homepage from "./pages/Homepage";
import { Route,Routes } from "react-router-dom";
import LocomotiveScroll from 'locomotive-scroll';
import Gallery from './pages/Gallery';
import InternationalJournal from './pages/InternationalJournal';
import ConferencePaper from './pages/ConferencePaper';
import FIITProjects from './pages/FIITProjects';
import Patents from './pages/Patents';
import BooksSupervised from './pages/BooksSupervised';
import Awards from './pages/Awards';
import Thesis from './pages/Thesis';
import RDConsultants from './pages/RDConsultants';
import Teaching from './pages/Teaching';
import IndustrialExperience from './pages/IndustrialExperience';
import OtherActivities from './pages/OtherActivities';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




function App() {

  
const locomotiveScroll = new LocomotiveScroll();

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/international-journal" element={<InternationalJournal />} />
      <Route path="/conference-paper" element={<ConferencePaper />} />
      <Route path="/fiit-projects" element={<FIITProjects />} />
      <Route path="/patents" element={<Patents />} />
      <Route path="/books-supervised" element={<BooksSupervised />} />
      <Route path="/awards" element={<Awards />} />
      <Route path="/thesis" element={<Thesis />} />
      <Route path="/rd-consultants" element={<RDConsultants />} />
      <Route path="/teaching" element={<Teaching />} />
      <Route path="/industrial-experience" element={<IndustrialExperience />} />
      <Route path="/other-activities" element={<OtherActivities />} />
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
