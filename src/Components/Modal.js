import React from 'react'
import './Modal.css'

const Modal = ({ isOpen, closeModal, title, imagen, children }) => {

    const handleModalDialogClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={`modal ${isOpen && 'modal-open'}`} onClick={closeModal}>
            <div className="modal__dialog" onClick={handleModalDialogClick}>
                <h1>{ title }</h1> 

                <img className="imagen-tamaño" src={imagen}></img>

                {children}

                <button onClick={closeModal}>
                    Close Modal
                </button>

            </div>
        </div>
    )
}

export default Modal;