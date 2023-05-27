import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/header.component';
import Main from './pages/main.page';
import NewPlace from './pages/newPlace.page';
import Footer from './components/footer.component';

import JurnalPage from './pages/Jurnal.page';
import JurnalSoup from './components/jurnal/JurnalSoup.page';
import JurnalLepesh from './components/jurnal/JurnalLepesh.page';

import Restouran from './pages/category/Cafe.page';
import Pab from './pages/category/Pab.page';
import Karaoke from './pages/category/Karaoke.page';
import Cafe from './pages/category/Cafe.page';
import FastFood from './pages/category/FastFood.page';
import Coffee from './pages/category/Coffee.page';
import Bar from './pages/category/Bar.page';
import Stolovka from './pages/category/Stolovka.page';



function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <Routes>
            <Route exact path='/' element={<Main/>}/>
            <Route exact path='/jurnal' element={<JurnalPage/>}/>
            <Route exact path="/allplace" element={<NewPlace />} />

            <Route exact path="/Restouran" element={<Restouran />} />
            <Route exact path="/Pab" element={<Pab />} />
            <Route exact path="/Karaoke" element={<Karaoke />} />
            <Route exact path="/FastFood" element={<FastFood />} />
            <Route exact path="/Coffee" element={<Coffee />} />
            <Route exact path="/Bar" element={<Bar />} />
            <Route exact path="/Stolovka" element={<Stolovka />} />
            <Route exact path="/Cafe" element={<Cafe />} />

            <Route exact path="/jurnal-soup" element={<JurnalSoup />} />
            <Route exact path="/jurnal-lepeshki" element={<JurnalLepesh />} />
          </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;