import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';

function Laptop() {
    let laptops = []
    let lengthProducts = []

    const productPerRow = 6;

    data.map(data =>{
         if(data.category === 'laptops'){
            lengthProducts.push(data)
         }
        return lengthProducts

    })


    const [next, setNext] = useState(productPerRow);

    const handleMoreProducts = () => {
         setNext(next + productPerRow);
      };

 
      lengthProducts.slice(0, next).map(data =>{
         if(data.category === 'laptops'){
             laptops.push(data)
        }
        return laptops

    })

  return (
    <div>
    <div className='list-of-product'>

   
    {laptops.map((laptop, index) =>(
         
     <div className='div-product' key={index}>

         
         <h3 className='title' >{laptop.title}</h3>
         <div className='product-img'> 
 
         <img src={laptop.thumbnail} alt="product"/>
         </div>
         <div className='price-stars'>
         <p className='price'>{laptop.price}$</p>
         <p>STARS</p>
         </div>
         <p className='descr'>{laptop.description}</p>
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
