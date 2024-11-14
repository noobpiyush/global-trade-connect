import './App.css'
import { Signin } from './components/Signin'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Signup } from './components/Signup';

function App() {
 
  return (
    <Router>
     <Routes>
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<Signup/>} />
     </Routes>
    </Router>
  )
}

export default App
