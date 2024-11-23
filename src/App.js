import "./App.css";
import Homepage from "./pages/Homepage";
import { Route,Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Important from "./pages/Important";
import ContestRulesPage from "./pages/ContestRulesPage";
import GameVideoPage from "./pages/GameVideoPage";
import ContactUsPage from "./pages/ContactUsPage";




function App() {

  return (
   <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/important-dates" element={<Important/>}/>
      <Route path="/contest-rules" element={<ContestRulesPage/>}/>
      <Route path="/game-videos" element={<GameVideoPage/>}/>
      <Route path="/contact" element={<ContactUsPage/>}/>
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
