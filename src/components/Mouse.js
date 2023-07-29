import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';

function Laptop() {
    let mouses = []
    let lengthProducts = []

    const productPerRow = 6;

    data.map(data =>{
         if(data.category === 'mouse'){
 
            lengthProducts.push(data)
         }
        return lengthProducts

    })


    const [next, setNext] = useState(productPerRow);

    const handleMoreProducts = () => {
         setNext(next + productPerRow);
      };

 
      lengthProducts.slice(0, next).map(data =>{
        // console.log(data)
        if(data.category === 'mouse'){
             mouses.push(data)
        }
        return mouses

    })

  return (
    <div>
    <div className='list-of-product'>

   
    {mouses.map((mouse, index) =>(
         
     <div className='div-product' key={index}>

         
         <h3 className='title' >{mouse.title}</h3>
         <div className='product-img'> 
 
         <img src={mouse.thumbnail} alt="product"/>
         </div>
         <div className='price-stars'>
         <p className='price'>{mouse.price}$</p>
         <p>STARS</p>
         </div>
         <p className='descr'>{mouse.description}</p>
         <br/>
         <div className='div-order'>
 
         <button className='order'>ORDER NOW</button>
         </div>
     </div>
    ))}
 
 </div>

<div className='load-more-div'>

{next < lengthProducts.length && (
<button className="load-more" onClick={handleMoreProducts} >Load more</button>

)}
</div>
</div>
  )
}


export default Laptop;
