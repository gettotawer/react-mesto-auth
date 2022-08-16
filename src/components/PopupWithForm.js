function PopupWithForm (props){
    return(
        <div className={`popup popup-${props.name} ${props.isOpen && "popup_opened"}` }>
        <div className={`popup__content popup-${props.name}__content`}>
            <h2 className={`popup__title popup-${props.name}__title`}>{props.title}</h2>
            {props.children}
        <button form={`popup-${props.name}__form`} id={`popup-${props.name}__form-button`} name="submitButton" type="submit" className={`popup__submit-button popup-${props.name}__submit-button`}>{props.buttonText}</button>  
            <button name="closeButton" type="button" className="popup__close-button" onClick={props.onClose}></button>
        </div>
        </div>
    )
}

export default PopupWithForm