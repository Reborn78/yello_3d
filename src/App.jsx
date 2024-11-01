import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas} from './components';
import {  Home, About, Contact, Projects } from "./pages";

const App = () => {
  return (
    <main className="">
    <Router>
      
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/projects' element={<Projects />} />
                  <Route path='/contact' element={<Contact />} />
                </Routes>
                
              </>
            }
          />
         
        </Routes>
      
    </Router>
    </main>
  )
};

export default App;
