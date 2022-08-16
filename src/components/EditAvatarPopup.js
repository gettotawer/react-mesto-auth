import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props){

    const avatarRef = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        props.onUpdateAvatar(avatarRef.current.value);
    }

    return(
        <PopupWithForm name="avatar" isOpen={props.isOpen} onClose={props.onClose} title={"Обновить аватар"} buttonText={'Сохранить'}>
            <form id="popup-avatar__form" className="popup__submit-form popup-avatar__form" onSubmit={handleSubmit} noValidate>
                <div className="popup__input-container">
                    <input ref={avatarRef} id="url-avatar" name="cardDescription" type="url" className="popup__form popup__input popup-avatar__form popup-avatar__form_el_link" placeholder="Ссылка на картинку" required/>
                    <span id="url-avatar-error" className="popup__error"></span>
                </div>
            </form>
        </PopupWithForm>
    )
}

export default EditAvatarPopup