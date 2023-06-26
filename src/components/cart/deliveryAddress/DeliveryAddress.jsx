import React, {useState, useRef} from "react";
import style from './deliveryAddress.module.css';
import ErroreMessage from "./erroreMessage/ErroreMessage";
import Message from "./orderMessage/Message";

const DeliveryAddress = (props)=> {
    //состояние формы берем из сессии или пустые строки
    let [formState, changeFormState] = useState({
        name : sessionStorage.getItem('name') || '',
        phone_number : sessionStorage.getItem('phone_number') || '',
        city : sessionStorage.getItem('city') || '',
        street : sessionStorage.getItem('street') || '',
        house_number: sessionStorage.getItem('house_number') || '',
        apartment : sessionStorage.getItem('apartment') || '',
        comments : sessionStorage.getItem('comments') || '',
        payment : sessionStorage.getItem('payment') || '',
    });

    let [message, setMessage] = useState(false); //состояние для показа сообщения об отправке товаров
    
    const inputEl = useRef(null); // ссылка на поле ввода номера телефона

    let [erroreMessage, setErroreMessage] = useState(false); //состояние сообщения об ошибке ввода телефона

    //функция отправки сообщения о заказе товаров (ТУТ происходит отправка заказа на сервер и ответ от него)
    // сейчас стоит заглушка проверяем только ввод номера телефона
    function orderSend(e){
        e.preventDefault();
        let number = sessionStorage.getItem('phone_number');//получаем из сессии ввоод телефона 
        if(number){
            number = number.trim();//если в поле ввода телефона есть что-то то получаем номер без пробелов
        }
        //проверка на заполнение поля (номер телефона) (проверка на "наличие, ввод числа, и кол-во цифр")
        //длина number всегда будет проходить по цифрам иначе отклоняться за счет isFinite
        if(number && isFinite(number) && (number.length > 5 && number.length <= 12)){
            // console.log(number.match(/\d/g).join('')); в конечном итоге этот результат уходит на сервер
            document.body.style.overflow = "hidden"; // убрали прокрутку
            setMessage(!message); // изменили состояние для показа сообщения
            inputEl.current.style.border = "2px solid #635f5f"; //при правильном вводе оставляем изначальный цвет поля
        }else{
            setErroreMessage(true); //устанавлиеваем состояние в true для вывода сообщения об ошибке
            setTimeout(()=> setErroreMessage(false), 2000); // возвращаем false для исчезновения сообщения об ошибке
            inputEl.current.focus(); //устанавливаем фокус в поле ввода номера телефона
            inputEl.current.style.border = "2px solid #d51e1e"; //изменяем цвет поля на красный
        }
    }

    //при изменении формы сохраняем значения в сессию и изменяем состояние формы
    function changeForm(e){
        if(e.target){
            sessionStorage.setItem(e.target.name, e.target.value);
            changeFormState(formState = {[e.target.name] : e.target.value})
        }
    }

    //функция склонения слова товар в зависимости от количества товаров
    function declination(n){
        if(n >= 0 && (n ^ 0) === n){
            if(n % 100 > 10 && n % 100 < 20){
                return 'товаров';
            }
            else if (n % 10 > 1 && n % 10 < 5){
                return 'товара';
            }
            else if (n % 10 === 1){
                return 'товар';
            }else{
                return 'товаров';
            }
        }
    }

    return (
        <div className={style.wrap}>
            <div className={style.child_1}>
                <h1>Вы заказали {props.countProduct} {declination(props.countProduct)}</h1>
                <h2>Итоговая сумма заказа: {props.totalPrice} &#8381;</h2>
            </div>
            <div className={style.child_2}>
                <form onChange={(e)=>changeForm(e)} method="post" action="/events" className={style.wrapForm}>
                    <label htmlFor="POST-name">Имя:
                        <input type="text" name="name" defaultValue={formState.name} />
                    </label>
                    <label htmlFor="POST-name">Телефон:
                        <input ref={inputEl} type="tel" name="phone_number" defaultValue={formState.phone_number} />
                    </label>
                    <label htmlFor="POST-name">Город:
                        <input type="text" name="city" defaultValue={formState.city} />
                    </label>
                    <label htmlFor="POST-name">Улица:
                        <input type="text" name="street" defaultValue={formState.street} />
                    </label>
                    <label htmlFor="POST-name">Номер дома:
                        <input type="text" name="house_number" defaultValue={formState.house_number} />
                    </label>
                    <label htmlFor="POST-name">Квартира:
                        <input type="text" name="apartment" defaultValue={formState.apartment}/>
                    </label>
                    <label htmlFor="POST-name">Оплата:
                        <select name="payment" defaultValue={formState.payment}>
                            <option  defaultValue="card">Банковской картой</option>
                            <option value="cash">Наличными</option>  
                        </select>
                    </label>
                    <label htmlFor="POST-name">Комментарии:
                        <input type="text" name="comments" defaultValue={formState.comments}/>
                    </label>
                    <button onClick={(e)=>orderSend(e)} type="submit">Отправить</button>
                </form>
            </div>
            {message && <Message />}
            {<ErroreMessage erroreMessage={erroreMessage}/> /*передаем пропсом состояние для изменения класса*/}
        </div>
        )
}

export default DeliveryAddress;