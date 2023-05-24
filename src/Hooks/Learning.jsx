import Modal from './Modal';
import React, { useState } from 'react'


const Learning = () => {
    const [inputValue, setInputValue] = useState(0);
    const [counter, setCounter] = useState(0);
    const [showModal, setMyModal] = useState(0);
    

    let increment = () => {
        setCounter(counter + 1);
    };

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);

    };
    return (
        <div className="flex gap-4 justify-center">
            <div className='grid grid-rows-3 gap-10'>
                <div className="w-full border">
                    <input type="search" placeholder="Search..." onChange={onChange} />
                    {inputValue}
                </div>
                <div className="w-full border">
                    <button className="bg-blue-600 px-4 py-2 rounded text-white text-center" onClick={increment}>Counter</button>
                    {counter}
                </div>
                <div className="w-full border">
                    <button onClick={() => setMyModal(true)} className="bg-blue-600 px-4 py-2 rounded text-white text-center">
                        Modal
                    </button>
                    {/* <Modal showModal/> */}
                    <Modal show={showModal} close={() => setMyModal(false)} />
                    

                </div>
            </div>
        </div>
    )
}

export default Learning
