import React from 'react';
import {Link} from 'react-router-dom';
import pizza from '../../imgs/menu/pizza.svg';
import rolls from '../../imgs/menu/rolls.svg';
import sets from '../../imgs/menu/sets.svg';
import beverages from '../../imgs/menu/beverages.svg';
import desserts from '../../imgs/menu/desserts.svg';
import wok from '../../imgs/menu/wok.svg';
import style from './home.module.css'
import Slider from './slider/Slider';
 
 const Home = () => {
  return ( 
    <>
    <Slider />
    <div className={style.wrapMain}> 
    <div className={style.wrap}>
      <div>
      <figure>
        <Link to="pizzaMenu">
          <img src={pizza} alt="пицца" />
        </Link>
        <figcaption>Пицца</figcaption>
      </figure>
      </div>
      <div>
      <figure>
        <Link to="rollsMenu">
          <img src={rolls} alt="роллы" />
        </Link>
        <figcaption>Роллы</figcaption>
      </figure>
      </div>
      <div>
      <figure>
        <Link to="setsMenu">
          <img src={sets} alt="сэты" />
        </Link>
        <figcaption>Сэты</figcaption>
       </figure>
      </div>
      <div>
      <figure>
        <Link to="beveragesMenu">
          <img src={beverages} alt="напитки" />
        </Link>
        <figcaption>Напитки</figcaption>
      </figure>
      </div>
      <div>
      <figure>
        <Link to="dessertsMenu">
          <img src={desserts} alt="десерты" />
        </Link>
        <figcaption>Десерты</figcaption>
      </figure>
      </div>
      <div>
      <figure>
        <Link to="wokMenu">
          <img src={wok} alt="wok лапша" />
        </Link>
        <figcaption>Wok Лапша</figcaption>
      </figure>
      </div>
    </div>
    </div>
    </>
    );
}

export default Home;
