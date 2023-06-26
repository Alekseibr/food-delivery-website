import React from "react";
import style from './erroreMessage.module.css';

const ErroreMessage = (props) => {
    return(
        <div className={props.erroreMessage ? style.wrap : style.wrap_action} >
            {/*класс обертки меняется в зависимости от состояния в пропсе*/}
            <p className={style.erroreMessage}>Некорректный ввод!</p>
        </div>
        )
}

export default ErroreMessage;