import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/Home';

import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ServicesPage from './pages/Services';
import AbonnementPage from './pages/Abonnement';
import Contact from './pages/Contact';
import Apropos from './pages/Apropos';

function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
       
        <Route path="/login" element={<LoginPage />} />
        <Route path='/register'  element={<RegisterPage/>}/>
        <Route path="/services" element={<ServicesPage/>}/>
        <Route path='/abonnement' element={<AbonnementPage/>}></Route>
        <Route path='/about' element={<Apropos/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
