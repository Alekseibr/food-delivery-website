import React from "react";
import { useState, useEffect, useRef } from "react";
import {Link} from 'react-router-dom';
import style from './slider.module.css';
import slide_1 from '../../../imgs/slider/1.jpg';
import slide_2 from '../../../imgs/slider/2.jpg';
import slide_3 from '../../../imgs/slider/3.jpg';
import slide_4 from '../../../imgs/slider/4.jpg';


const Slider = ()=>{
    const sliderElem = useRef(null);

    let [index, setIndex] = useState(1);

    useEffect(()=>{
        let element = sliderElem.current.children; //массив элементов div
        const interval = setInterval(()=>{
            element[index].style.opacity = '1';
            if(index > 0){
                element[index-1].style.opacity = '0';
            }
            if(index === 0){
                sliderElem.current.lastChild.style.opacity = '0';
            }
            setIndex(()=>index + 1);
            if(index === element.length-1) setIndex(()=> index * 0);
        },5000);
        return () =>{
            clearInterval(interval);
        };
    }, [index]);

    return(
        <Link to="promotion">
            <div className={style.slider}>
                <div ref={sliderElem} className={style.wrap_slider}>   
                    <div>    
                        <img src={slide_1} alt="слайд 1" />  
                    </div>
                    
                    <div>
                        <img src={slide_2} alt="слайд 2" />
                    </div>
                    <div>
                        <img src={slide_3} alt="слайд 3" />
                    </div>
                    <div>
                        <img src={slide_4} alt="слайд 4" />
                    </div>
                </div>
            </div>
        </Link> 
        )
}

export default Slider;