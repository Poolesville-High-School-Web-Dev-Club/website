import Navbar from './components/Navbar'
import Welcome from './components/Welcome'
import MemberPages from './components/MemberPages'
import About from './components/About'
import FAQ from './components/FAQ'
import Join from './components/Join'

import React, { useState } from 'react';

export default function App() {

  const [showJoinModal, setShowJoinModal] = useState(false);

  return (
    <>
      <main className={`${showJoinModal ? 'blur-sm' : 'blur-none'} transition-primary`} >
        <Navbar setShowJoinModal={setShowJoinModal} />
        <div className='container mx-auto '>
          <Welcome />
          <MemberPages />
          <div className='flex mt-24'>
            <About />
            <FAQ setShowJoinModal={setShowJoinModal} />
          </div>
          <div className='flex justify-center mt-24 text-center'>
            <p>interested?<br />join <span onClick={() => setShowJoinModal(true)} className='cursor-pointer text-secondary '>here.</span></p>
          </div>
        </div>
      </main>
      <div className={`${showJoinModal ? 'opacity-100 pointer-events-auto' : ' opacity-0 pointer-events-none'} transition-primary `}>
        <Join setShowJoinModal={setShowJoinModal} />
      </div>
    </>
  );
}