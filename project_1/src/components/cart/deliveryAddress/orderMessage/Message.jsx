import React from "react";
import style from './message.module.css';

const Message = () => {
    // функция случайных чисел
    function randomNum(min, max){
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
    
    function redirect (e) {
        sessionStorage.clear(); //чистим хранилище сессии
        document.location.href="/"; //редирект на главную
    }

    return (
        <div className={style.wrap}>
            <div className={style.message}>
                <h3>Ваш заказ № {randomNum(1, 1000)} отправлен</h3>
                <button onClick={(e)=>redirect(e)}>X</button>
            </div>
        </div>
        )

}

export default Message;