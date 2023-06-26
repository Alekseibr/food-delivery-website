
import React, { Suspense } from 'react';
import {Link, useLoaderData, defer, Await} from "react-router-dom";
import Loader from '../../Preloader/Loader';
import NotFound from '../../notFound/NotFound';
import style from '../menu.module.css';

async function getMenu(){
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/desserts`);
  if(!res.ok) {
    throw new Response('', {status: res.status})
  }
  return res.json();
}
const dessertsMenuLoader = async() => {
    return defer({
      menu: getMenu(),
    })
  }
  
const DessertsMenu = ()=>{
  const {menu} = useLoaderData();
 
  return (
    <>
   <h2 className={style.title}>Меню десертов</h2>
   <Suspense fallback={<Loader />}>
    <Await resolve={menu} errorElement={<NotFound />} >
        {
          (resolvedMenu)=>(
              <div className={style.wraperMain}>
              {resolvedMenu.map(k => (
               <figure key={k.id}>
                  <div className={style.wrapCard}>
                    <Link to={`/dessertsMenu/${k.id}`}>
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


export {dessertsMenuLoader};
export default DessertsMenu;