import React from 'react';
import style from './contacts.module.css';


const Contacts =(props) => {
    return( 
      <div className={style.wrap}>
            <div>
                  <h2>Контакты</h2>
            </div>
            <div>
                  <h3>Адрес и время работы:</h3>
            </div>
            <div className={style.description}>
                  <p>г. Москва, ул. Героев, 56</p>
                  <p>тел. <span>{props.telephone}</span></p>
                  <p>Время работы с <span>10:00</span> до <span>24:00</span></p>
                  <p>Заказы принимаются в будние дни с <span>10:00</span> до <span>24:00</span></p>
                  <p>Пятница, суббота, воскресенье с <span>09:00</span> до <span>24:00</span></p>
            </div>
      </div>
      );
}

export default Contacts;