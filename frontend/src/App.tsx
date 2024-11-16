import './App.css'
import { Signin } from './components/Signin'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from './components/Signup';
import { LandingPage } from './components/LandingPage';
import InfoForm from './components/InfoForm';


function App() {
 
  return (
    <Router>
     <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />
      <Route path='/info-form' element={<InfoForm/>} />
     </Routes>
    </Router>
  )
}

export default App
