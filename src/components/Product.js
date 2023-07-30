import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';

function Product() {
    let phones = []
    let lengthPhones = []

    const productPerRow = 6;

    data.map(data =>{
        // console.log(data)
        if(data.category === 'smartphones'){
            lengthPhones.push(data)
            // return phones
        }
        return lengthPhones

    })



    const [next, setNext] = useState(productPerRow);
    const handleMoreProducts = () => {
        console.log('aaa')
        setNext(next + productPerRow);
      };

    data.slice(0, next).map(data =>{
        // console.log(data)
        if(data.category === 'smartphones'){
             phones.push(data)
            // return phones
        }
        return phones

    })


    

  return (
    <div>
    <div className='list-of-product'>

   
    {phones.map((phone, index) =>(
         
     <div className='div-product' key={index}>

         
         <h3 className='title' >{phone.title}</h3>
         <div className='product-img'> 
 
         <img src={phone.thumbnail} alt="product"/>
         </div>
         <div className='price-stars'>
         <p className='price'>{phone.price}$</p>
         <p>STARS</p>
         </div>
         <p className='descr'>{phone.description}</p>
         <br/>
         <div className='div-order'>
 
         <button className='order'>ORDER NOW</button>
         </div>
     </div>
    ))}
 
 
     </div>

     <div className='load-more-div'>

{next < lengthPhones.length && (
<button className="load-more" onClick={handleMoreProducts} >Load more</button>
     
    )}
</div>
</div>


  )
}


export default Product;
