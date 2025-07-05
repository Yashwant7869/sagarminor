import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/Body.jsx';
import Browse from './components/Browse.jsx';
import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import PlacesFormPage from './pages/PlacesFormPage.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import FAQ from './components/FAQ/Faq.jsx'; 
import Breathing from './components/BreathingComponent/BreathingSection.jsx'; 
import Books from './components/Books/Books.jsx'; 
import axios from 'axios';
import RewardTree from './components/RewardTree/RewardTree.jsx';
import Video from './components/Video/Video.jsx'; 
import Bubble from './components/Games/Bubble/Bubble.jsx'; 
import HeroCard from './components/HeroCard/HeroCard.jsx';
import HeroCard2 from './components/HeroCard/HeroCard2.jsx';  
import ColorMatch from './components/Games/ColorMatch/colorMatch.jsx'; 
import Memory from './components/Games/Memory/Memory.jsx'; 
import ProtectedRoute from './components/ProtectedRoute.jsx';

import Relax from './components/relax/Relax.jsx';
import Article from './components/Article/Articles.jsx';

import Anxiety from './components/Article/Anxiety.jsx';
import Depression from './components/Article/Depression.jsx';
import Ocd from './components/Article/Ocd.jsx';
import PanicDisorder from './components/Article/PanicDisorder.jsx';
import BipolarArticle from './components/Article/BipolarArticle.jsx';
import Schizophrenia from './components/Article/Schizophrenia.jsx';
import Ptsd from './components/Article/Ptsd.jsx';
import Psychosis from './components/Article/Psychosis.jsx';


// Set axios defaults based on environment
const API_BASE = import.meta.env.MODE === 'development' 
  ? 'http://localhost:8080'
  : 'https://sagarminor.onrender.com';

axios.defaults.baseURL = API_BASE; 
axios.defaults.withCredentials = true; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/header' element={<Header />} />
        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <Route path='/browse' element={<ProtectedRoute><Browse /></ProtectedRoute>} />
        <Route path='/body' element={<ProtectedRoute><Body /></ProtectedRoute>} />
        <Route path='/placeformpage' element={<ProtectedRoute><PlacesFormPage /></ProtectedRoute>} />
        <Route path='/reward' element={<ProtectedRoute><RewardTree /></ProtectedRoute>} />
        <Route path='/breathing' element={<ProtectedRoute><Breathing /></ProtectedRoute>} />
        
        
        <Route path='/relax' element={<ProtectedRoute><Relax/></ProtectedRoute>}/>  
        <Route path='/articles' element={<Article/>}/> 

        <Route path='/anxiety' element={<Anxiety/>}/>
        <Route path='/depression' element={<Depression/>}/>
        <Route path='/ocd' element={<Ocd/>}/>
        <Route path='/panicdisorder' element={<PanicDisorder/>}/>
        <Route path='/bipolar-article' element={<BipolarArticle/>}/>
        <Route path='/schizophrenia' element={<Schizophrenia/>}/>
        <Route path='/ptsd' element={<Ptsd/>}/>
        <Route path='/psychosis' element={<Psychosis/>}/>
     



            


        <Route path='/books' element={<ProtectedRoute><Books /></ProtectedRoute>} />
        <Route path='/video' element={<ProtectedRoute><Video /></ProtectedRoute>} />
        <Route path='/bubble' element={<ProtectedRoute><Bubble /></ProtectedRoute>} />
        <Route path='/color' element={<ProtectedRoute><ColorMatch /></ProtectedRoute>} />
        <Route path='/memory' element={<ProtectedRoute><Memory /></ProtectedRoute>} />
        <Route path='/HeroCard' element={<ProtectedRoute><HeroCard /></ProtectedRoute>} />
        <Route path='/HeroCard2' element={<ProtectedRoute><HeroCard2 /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;

