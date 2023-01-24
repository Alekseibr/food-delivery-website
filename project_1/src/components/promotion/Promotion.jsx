import React from 'react';
import style from './promotion.module.css';
import slide_2 from '../../imgs/slider/2.jpg';
import slide_3 from '../../imgs/slider/3.jpg';
import slide_4 from '../../imgs/slider/4.jpg';


const Promotion = () => {
    return (
        <>
            <h2 className={style.title}>Акции</h2>
            <div className={style.wrap}>
                <div>
                    <img src={slide_2} alt="Картинка" />
                </div>
                <div>
                    <img src={slide_3} alt="Картинка" />
                </div>
                <div>
                    <img src={slide_4} alt="Картинка" />
                </div>
            </div>
        </>
    )
}
export default Promotion;