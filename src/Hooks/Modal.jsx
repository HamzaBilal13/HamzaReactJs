import React from 'react'

const Modal = ({ show, close }) => {
  if (!show) return null;
  return (
    <div className="flex justify-center items-center shadow-sm backdrop-blur-sm bg-black bg-opacity-30 fixed inset-0 h-screen">
      <div className="bg-white w-[40%] flex justify-center items-center rounded p-10">

        <div className="text-center text-3xl font-bold">
          Modal Content
          <div className="mt-10"  onClick={() => close()}>
            <button  className="bg-red-600 rounded px-4 py-2 text-white text-center">Close Modal</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
