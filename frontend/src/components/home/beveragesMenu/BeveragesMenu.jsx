
import React, { Suspense } from 'react';
import {Link, useLoaderData, defer, Await} from "react-router-dom";
import Loader from '../../Preloader/Loader';
import NotFound from '../../notFound/NotFound';
import style from '../menu.module.css';

async function getMenu(){
  const res = await fetch(`http://localhost:3001/beverages`);
  if(!res.ok) {
    throw new Response('', {status: res.status});
  }
  return res.json();
}
const beveragesMenuLoader = async() => {
    return defer({
      menu: getMenu(),
    })
  }
  
const BeveragesMenu = ()=>{
  const {menu} = useLoaderData();
 
  return (
    <>
   <h2 className={style.title}>Меню напитков</h2>
   <Suspense fallback={<Loader />}>
    <Await resolve={menu} errorElement={<NotFound />} >
        {
          (resolvedMenu)=>(
              <div className={style.wraperMain}>
              {resolvedMenu.map(k => (
               <figure key={k.id}>
                  <div className={style.wrapCard}>
                    <Link to={`/beveragesMenu/${k.id}`}>     
                      <img className={style.card} src={k.url} alt='картинка'/> 
                    </Link>
                  </div>
                  <figcaption className={style.productName}>{k.title}</figcaption>
                </figure>
                ))}
             </div>
            )
        }
    </Await>
   </Suspense>
   
   </>
)
}


export {beveragesMenuLoader};

export default BeveragesMenu;