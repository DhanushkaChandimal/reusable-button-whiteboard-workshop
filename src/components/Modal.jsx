import React from "react";
import Button from "./Button";

const Modal =({
    isOpen=true,
    closeModal
}) => {

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                <div>Modal Content</div>
               
                <Button onClick={()=>closeModal(false)}>Close Modal</Button>
            </div>
        </div>
    )
}

export default Modal;