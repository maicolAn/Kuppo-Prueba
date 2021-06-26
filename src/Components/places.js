import React from 'react';
import "./places.css";
import useModal from '../hook/useModal';
import Modal from './Modal';
import GalleryModal from './GalleryModal';


function Places() {
    
    
        const [isOpenModal1, openModal1, closeModal1] = useModal();
        const [isOpenModal2, openModal2, closeModal2] = useModal();
        const [isOpenModal3, openModal3, closeModal3] = useModal();
        return(
            <div id="places">
                <label>
                    <a className="titulos-places"><strong>Place to</strong> visit</a>
                    <div id="reviews">
                        <div className="reviews-margen">
                            <a>+ Top Reviews</a>
                            <img id="reviews" alt="perfil" src={process.env.PUBLIC_URL + "perfil1.jpg"}/>
                            <img id="reviews" alt="perfil" src={process.env.PUBLIC_URL + "perfil1.jpg"}/>
                            <img id="reviews" alt="perfil" src={process.env.PUBLIC_URL + "perfil1.jpg"}/>
                            <img id="reviews" alt="perfiles" src={process.env.PUBLIC_URL + "reviews.png"}/>
                        </div>
                    </div>
                
                </label>
                <label>
                    <div className="cajas-place-1">
                        <img onClick={openModal1} className="places" alt="Singapore" src={process.env.PUBLIC_URL+"singapore.jpg"}></img>
                        <img className="locationIcon1" alt="icono" src={process.env.PUBLIC_URL + "locationIcon.png"}></img>
                        <a className="tipolugar1">Arab Street</a>
                        <a className="nombrelugar1">Singapore</a>
                    </div>
                </label>
                <label>
                    <div className="cajas-place-medio">
                        <img onClick={openModal2} className="places" alt="Bogota" src={process.env.PUBLIC_URL+"museo2.jpg"}></img>
                        <img className="locationIcon2" alt="icono" src={process.env.PUBLIC_URL + "locationIcon.png"}></img>
                        <a className="tipolugar2">Art Science</a>
                        <a className="nombrelugar2">Museum</a>
                    </div>
                </label>
                <label>
                    <div className="cajas-place-ultimo" onClick={openModal3}>
                        <img  className="locationIcon2" alt="icono" src={process.env.PUBLIC_URL + "locationIcon.png"}></img>
                        <img className="places2" alt="Singapore" src={process.env.PUBLIC_URL+"museo1.jpg"}/><button  className="boton-add-places">+</button>
                        <a className="tipolugar3">Art Science</a>
                        <a className="nombrelugar3">Museum</a>
                    </div>
                </label>
                <GalleryModal isOpen={isOpenModal1} title="Description" imagen={process.env.PUBLIC_URL+"singapore.jpg"} closeModal={closeModal1} />
                <GalleryModal isOpen={isOpenModal2} title="Description" imagen={process.env.PUBLIC_URL+"museo2.jpg"} closeModal={closeModal2} />
                <GalleryModal isOpen={isOpenModal3} title="Description" imagen={process.env.PUBLIC_URL+"museo1.jpg"} closeModal={closeModal3} />
            </div>
        );
    
}

export default Places;
