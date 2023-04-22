import React from 'react';
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components'
import { Home, Campaigns, CampaignDetails, Profile } from './pages'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/campaigns' element={<Campaigns />}/>
        <Route path='/profile' element={<Profile />} />
        <Route path="/campaign-details/:id" element={<CampaignDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
