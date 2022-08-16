import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props){

    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleAddPlaceSubmit(e){
        e.preventDefault();

        props.onAddCard({
            name: nameRef.current.value,
            link: linkRef.current.value
        });
        linkRef.current.value = "";
        nameRef.current.value = "";
    }

    return(
        <PopupWithForm name="element" isOpen={props.isOpen} onClose={props.onClose} title={"Новое место"} buttonText={'Создать'}>
            <form id="popup-element__form" className="popup__submit-form popup-element__form" onSubmit={handleAddPlaceSubmit} noValidate>
                <div className="popup__input-container">
                    <input ref={nameRef} id="el-name" name="cardName" type="text" className="popup__form popup__input popup-element__form popup-element__form_el_name" placeholder="Название" minLength="2" maxLength="30" required/>
                    <span id="el-name-error" className="popup__error"></span>
                </div>
                <div className="popup__input-container">
                    <input ref={linkRef} id="url" name="cardDescription" type="url" className="popup__form popup__form_lower popup__input popup-element__form popup-element__form_el_link" placeholder="Ссылка на картинку" required/>
                    <span id="url-error" className="popup__error"></span>
                </div>
            </form>
        </PopupWithForm>
    )
}

export default AddPlacePopup