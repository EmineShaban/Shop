import './ListOfProducts.css';
import data from '../data.json'
import { useState } from 'react';
import Product from './Product';
function ListOfProducts() {

    const productPerRow = 6;
    const arrData = []
    const [selectedOption, setselectedOption] = useState('Az');
 
    // if(selectedOption == 'Low'){
    //     return data.sort((a, b) => (a.price > b.price)? 1 : -1)
    //  } else if(selectedOption == 'High'){
    //     return data.sort((a, b) => (b.price > a.price) ? 1 : -1)

    //  }else{
    //     return  data.sort((a, b) => (a.title > b.title) ? 1 : -1)
    //  }

    data.map((product, index) => {
        
        arrData.push(product)
       
         return data
    }
    )

    const [next, setNext] = useState(productPerRow);
    const handleMoreProducts = () => {
        // console.log('aaa')
        setNext(next + productPerRow);
    };





    let sortArr = []





function order(){
    alert('Product added to cart')
}


    return (
        <div>
            <div className='name-sort'>
                <div className='name'>
                    <h1>ALL PRODUCTS</h1>
                    <p>Choose your product!</p>
                </div>
                <div className='sort'>
                    <div>

                        <label for="sorting">Sort by: </label>
                        <select name="sorting" id="sorting" value={selectedOption}
                            onChange={e => setselectedOption(e.target.value)}>
                            <option value="Az" selected>A-Z</option>
                            <option value="Za"  >Z-A</option>
                            <option value="Low" >Price low</option>
                            <option value="High"  >Price high</option>
                        </select>
                    </div>                </div>

            </div>
 
<Product data={data}/>
                {/* { selectedOption == "Za" ? data.sort((a, b) => (b.title > a.title) ? 1 : -1).slice(0, next).map((product, index) => (
                    <div className='div-product' key={index}>


                        <h3 className='title' >{product.title}</h3>
                        <div className='product-img'>

                            <img src={product.thumbnail} alt="product" />
                        </div>
                        <div className='price-stars'>
                            <p className='price'>{product.price}$</p>
                            <p>STARS</p>
                        </div>
                        <p className='descr'>{product.description}</p>
                        <br />
                        <div className='div-order'>

                            <button onClick={order}  className='order'>ORDER NOW</button>
                        </div>
                    </div>
                )) : selectedOption == "Low" ? data.sort((a, b) => (a.price > b.price) ? 1 : -1).slice(0, next).map((product, index) => (
                    <div className='div-product' key={index}>


                        <h3 className='title' >{product.title}</h3>
                        <div className='product-img'>

                            <img src={product.thumbnail} alt="product" />
                        </div>
                        <div className='price-stars'>
                            <p className='price'>{product.price}$</p>
                            <p>STARS</p>
                        </div>
                        <p className='descr'>{product.description}</p>
                        <br />
                        <div className='div-order'>

                            <button onClick={order}  className='order'>ORDER NOW</button>
                        </div>
                    </div>
                )) : selectedOption == "High" ? data.sort((a, b) => (b.price > a.price) ? 1 : -1).slice(0, next).map((product, index) => (
                    <div className='div-product' key={index}>


                        <h3 className='title' >{product.title}</h3>
                        <div className='product-img'>

                            <img src={product.thumbnail} alt="product" />
                        </div>
                        <div className='price-stars'>
                            <p className='price'>{product.price}$</p>
                            <p>STARS</p>
                        </div>
                        <p className='descr'>{product.description}</p>
                        <br />
                        <div className='div-order'>

                            <button onClick={order}  className='order'>ORDER NOW</button>
                        </div>
                    </div>
                )) :  data.sort((a, b) => (a.title > b.title) ? 1 : -1).slice(0, next).map((product, index) => (
                    <div className='div-product' key={index}>


                        <h3 className='title' >{product.title}</h3>
                        <div className='product-img'>

                            <img src={product.thumbnail} alt="product" />
                        </div>
                        <div className='price-stars'>
                            <p className='price'>{product.price}$</p>
                            <p>STARS</p>
                        </div>
                        <p className='descr'>{product.description}</p>
                        <br />
                        <div className='div-order'>

                            <button onClick={order} className='order'>ORDER NOW</button>
                        </div>
                    </div>
                )) } */}
                 {/* {data.slice(0, next).map((product, index) => (
                    <div className='div-product' key={index}>


                        <h3 className='title' >{product.title}</h3>
                        <div className='product-img'>

                            <img src={product.thumbnail} alt="product" />
                        </div>
                        <div className='price-stars'>
                            <p className='price'>{product.price}$</p>
                            <p>STARS</p>
                        </div>
                        <p className='descr'>{product.description}</p>
                        <br />
                        <div className='div-order'>

                            <button className='order'>ORDER NOW</button>
                        </div>
                    </div>
                )) } */}

             {/* <div className='load-more-div'>

                {next < data.length && (
                    <button className="load-more" onClick={handleMoreProducts} >Load more</button>

                )}
            </div> */}

        </div>
    )
}


export default ListOfProducts;
