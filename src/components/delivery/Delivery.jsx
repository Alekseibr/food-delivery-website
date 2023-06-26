import React from 'react';
import style from './delivery.module.css';


const Delivery = () => {
  return (
    <div className={style.wrap}>
      <div>
        <h2>Доставка</h2>
      </div>
      <div>
        <p>Бесплатная доставка по городу при заказе от <span>1000</span> рублей!</p>
        <p>В остальных случаях в зависимости от района. (Уточняйте у опператора по телефону.)</p>
      </div>
    </div>
    );
}

export default Delivery;