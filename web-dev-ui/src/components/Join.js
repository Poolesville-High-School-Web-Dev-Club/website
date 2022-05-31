import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'

import React, { useState } from 'react';

export default function Join({ setShowJoinModal }) {

    const [name, setName] = useState('');

    const signUp = async () => {
        const response = await fetch('http://localhost:3000/join', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name })
        });
        const result = await response.json();
    }


    return (
        <div className="absolute top-0 left-0 z-40 w-screen h-screen" >
            <div id="joinModalBg" className="flex w-screen h-screen" onClick={(e) => { if (e.target.id === 'joinModalBg') { setShowJoinModal(false) } }}>
                <div className="relative px-32 py-16 m-auto bg-blue-800 rounded-lg">
                    <FontAwesomeIcon icon={faX} onClick={() => setShowJoinModal(false)} className='absolute cursor-pointer top-4 right-4' />
                    <div className='flex flex-col gap-4 text-center'>
                        <h2>Sign up for PHS web dev club</h2>

                        <div className='mt-4'>
                            <label className='mr-4 text-xl font-semibold'>Full name</label>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='p-1 text-xl font-semibold bg-blue-900 rounded-md' />
                        </div>
                        <div className='mt-4'>
                            <button className='px-8 py-2 text-2xl bg-blue-900 rounded-md hover-bg-gray' onClick={signUp}>Join!</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}