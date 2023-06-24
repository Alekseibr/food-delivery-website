 import React from 'react';
 import style from './header.module.css';
 import {useState} from 'react';
 import {NavLink} from 'react-router-dom';
 import {Link} from 'react-router-dom';
 import lableImg from '../../imgs/header/Food.png';
 import cart from '../../imgs/header/cart.png';
 import github from '../../imgs/header/github.png';

const Header =(props) => {
let [menu, setStateMenu] = useState(false);

const colorLink = ({ isActive }) =>
    isActive ? style.activeLink : '';

   return(
   <>
   <header className={style.container}>
   <div className={style.container_2}>
     {/*лэйбл*/}
   <div className={style.label}>
      <div className={style.front}>
        <a href="https://github.com/Alekseibr" > 
          <img aria-hidden="true" focusable="false" src={lableImg} alt='Lable image' />
        </a>
      </div>
      <div className={style.back}>
        <a href="https://github.com/Alekseibr" > 
          <img aria-hidden="true" focusable="false" src={github} alt='Lable image' />
        </a>
      </div>
      
   </div>
   
   <div className={style.wrap_nav_brand}>
 <nav className={menu ? [style.nav, style.nav_active].join(' '):[style.nav]}>
    <ul>
      <li onClick={()=>setStateMenu(!menu)}>
        <NavLink className={colorLink} to="/" end>Главная</NavLink>
      </li>
      <li onClick={()=>setStateMenu(!menu)}> 
        <NavLink className={colorLink} to="/promotion">Акции</NavLink>
      </li>
      <li onClick={()=>setStateMenu(!menu)}>
        <NavLink className={colorLink} to="/delivery">Доставка</NavLink>
      </li>
      <li onClick={()=>setStateMenu(!menu)}>
         <NavLink className={colorLink} to="/contacts">Контакты</NavLink>
      </li>
    </ul>
 </nav>
 <div className={style.brandNameContainer}>
 <h1 className={style.brandName}>Название бренда компании</h1>
 </div>
 </div>
 </div>
 {/*кнопка бургер меню*/}
 <div onClick={()=>setStateMenu(!menu)} className={menu ? 
  [style.burger_menu_button, style.burger_menu_active].join(' ') : [style.burger_menu_button]}>
    <span className={style.burger_menu_lines} ></span>
  </div>
 <div className={style.wrap_number_cart}>
 <h2 className={style.phoneNumber}>{props.telephone}</h2>
 {/*корзина*/}
 <div className={style.cart}> 
 <Link to="/cart">
 <img aria-hidden="true" focusable="false" src={cart} alt='Корзина' />
</Link>
<span className={props.amountElem !== 0 ?  style.countCart: ''}>
      {props.amountElem !== 0 && props.amountElem}
      <span className={style.flare}></span>
</span>
 </div>
 </div>
 </header>
 </>
 )
 }
 
 export default Header;