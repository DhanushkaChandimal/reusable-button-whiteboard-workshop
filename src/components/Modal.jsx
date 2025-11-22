import React, { useState } from "react";
import Button from "./Button";

const Modal =({
    isOpen=true,
    closeModal
}) => {

    const [activate, setActivate] = useState(false)

    if(!isOpen) return null;

    function handleButton() {
        setActivate(true)
    }


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                <div>Modal Content</div>

                {activate && (
                    <h2 className='text-3xl font-extrabold bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-500
                        text-transparent bg-clip-text drop-shadow-lg p-2 mb-2 animate-pulse'
                    >Function Running!
                    </h2>
                )}
               
                <Button onClick={()=>closeModal(false)}>Close Modal</Button>
                <Button onClick={handleButton}>Run Function</Button>
            </div>
        </div>
    )
}

export default Modal;