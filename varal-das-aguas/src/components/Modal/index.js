import React, { useState } from 'react';
import Modal from 'react-modal'
import { FaTimes } from 'react-icons/fa'

import './styles.css';
import api from '../../services/api'

const customStyles = {
    overlay: {
        zIndex: 10,
        background: 'rgba(0, 0, 0,0.5)',
    },
    content : {
      top         : '50%',
      left        : '50%',
      right       : 'auto',
      bottom      : 'auto',
      marginRight : '-50%',
      transform   : 'translate(-50%, -50%)',
      width       : '70%',
      height      : '85%',
      padding     : 0,
      border      : 'none'
    }
};

Modal.setAppElement('#root')
export default function ModalRegister(props){

    const [name, setName] = useState('');
    const [pictureName, setPictureName] = useState('');
    const [placeName, setPlaceName] = useState('');
    const [date, setDate] = useState('');
    const [check, setCheck] = useState(false);
    const [image, setImage] = useState([]);
    const [previewImage, setPreviewImage] = useState([]);

    async function handleSubmit(evento) {
        evento.preventDefault();
        const data = new FormData();

        data.append('nome', name);
        data.append('nome_foto', pictureName);
        data.append('local_foto', placeName);
        data.append('data_foto', date);
        data.append('img_base64', image);
        data.append('termos', check);

        try {
            await api.post('/participante', data);
            props.modalIsClose();
            alert('Cadastro Realizado com sucesso');
            setName('');
            setPictureName('');
            setPlaceName('');
            setDate('');
            setCheck(false);
            setImage([]);
            setPreviewImage([]);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSelectImage(event){
        if(!event.target.files){
            return;
        }

        const imageActual = Array.from(event.target.files);
        setImage(imageActual);

        const imagePreview = imageActual.map(img => {
            return URL.createObjectURL(img)
        });

        setPreviewImage(imagePreview);
    }

    return (
        <Modal
        isOpen={props.modaIsOpen}
        onRequestClose={props.modalIsClose}
        style={customStyles}                                                                   
        >
            <div className="modal">
                <div className="modal-header">
                    <h1 className="title-modal">FAÇA SUA INSCRIÇÃO</h1>
                    <FaTimes size={26}  color="#ffffff" className="close-modal" onClick={props.modalIsClose}/>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="modal-body">
                        <div className="select-image">
                            <div className="form-image">
                                {previewImage.map(image => {
                                    return (
                                        <img key={image} src={image} alt="Minha imagem"/>
                                    )
                                })}
                            </div>
                            <label htmlFor="image" className="button-selec-image">Selecione a imagem</label>
                            <input type="file" onChange={handleSelectImage} id="image" className="input-file"/>
                        </div>
                        <hr className="separator"/>
                        <div className="form-register">
                            <label>Digite seu nome</label>
                            <input 
                                className="input-form" 
                                placeholder="Meu nome" 
                                name="name" 
                                value={name} 
                                onChange={(event) => setName(event.target.value)}></input>
                            <label>Nome da foto</label>
                            <input 
                                className="input-form" 
                                placeholder="ex: Praia" 
                                name="picture_name" 
                                value={pictureName} 
                                onChange={(event) => setPictureName(event.target.value)}></input>
                            <label>Local da foto</label>
                            <input 
                                className="input-form" 
                                placeholder="ex: Salvador" 
                                name="place_name" 
                                value={placeName} 
                                onChange={(event) => setPlaceName(event.target.value)}></input>
                            <label>Data da foto</label>
                            <input 
                                className="input-form" 
                                placeholder="00/00/0000" 
                                name="date" 
                                value={date} 
                                onChange={(event) => setDate(event.target.value)}></input>
                            <div className="form-checkbox">
                            <input 
                                type="checkbox" 
                                className="checkbox" 
                                name="check" 
                                value={check} 
                                onClick={() => check == false ? setCheck(true) : setCheck(false)}></input>
                            <p>Li e aceito os termos</p>
                            </div>
                            <button type="submit" className="button-submit">Enviar!</button>             
                        </div>
                    </div>
                </form>
            </div>
        </Modal>
    )
}