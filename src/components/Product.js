import './ListOfProducts.css';
import { useState } from 'react';
import { useLocation } from "react-router-dom";

import './Product.css';

function Product({ data }) {

    const productPerRow = 6;

    console.log(data)

    const location = useLocation();
    let nameLink = location?.pathname;
    console.log(nameLink)


    function order() {
        alert('Product added to cart')
    }



    const [next, setNext] = useState(productPerRow);
    const handleMoreProducts = () => {
        console.log('aaa')
        setNext(next + productPerRow);
    };




    const [selectedOption, setselectedOption] = useState('Az');

    if (selectedOption == 'Low') {
        data.sort((a, b) => (a.price > b.price) ? 1 : -1)
    } else if (selectedOption == 'High') {
        data.sort((a, b) => (b.price > a.price) ? 1 : -1)

    } else if (selectedOption == 'Az') {
        data.sort((a, b) => (a.title > b.title) ? 1 : -1)

    } else if (selectedOption == 'Za') {
        data.sort((a, b) => (b.title > a.title) ? 1 : -1)

    }



    const [selectedBrand, setselectedBrand] = useState('');
    const [checked, setChecked] = useState([]);

    let categoryList = []
    // let checked = []
    console.log(selectedBrand)
    if (selectedBrand === '') {
        console.log('a')
        // data = data.filter(pr => pr.brand === selectedBrand)
        data.map((product, index) => {
            // if (product.category === 'smartphones') {
            if (!categoryList.includes(product.brand)) {
                categoryList.push(product.brand)
                return data
            }

            // }
            return categoryList
        })
    } else {
        
            data.map((product, index) => {
                // if (product.category === 'smartphones') {
                if (!categoryList.includes(product.brand)) {
                    categoryList.push(product.brand)
                    data = data.filter(pr => pr.brand === selectedBrand)
                    return data
                }


                // }
                return categoryList
            }
            )
            //             let newArr = []

            //             checked?.map((prod, i) => {

            //                 console.log(prod)
            //                 data.filter(pr => {
            //                   if(pr.brand === prod){
            //                     console.log(pr)
            //                     // newArr.push(pr)
            // return newArr
            //                   }
            //                 })
            //                 // arr.concat(newArr)
            //                 // newArr = arr
            //                 // newArr.push(arr)
            //                 console.log(newArr)



            //             })
            // data = newArr
            // return data
        
        // else {
        //     data.map((product, index) => {
        //         // if (product.category === 'smartphones') {
        //         if (!categoryList.includes(product.brand)) {
        //             categoryList.push(product.brand)
        //             return data
        //         }

        //         // }
        //         return categoryList
        //     })
        // }

    }

    // data.map((product, index) => { 
    // if(selectedBrand === product.brand){
    //         arrData.push(product)
    //         console.log(arrData)


    //     }
    //     return <FilterBrand data={arrData}/>

    // })



    return (
        <div className='filterProduct'>
            <div className='filterDiv'>
                <ul className='filters'>
                    <li>ddddd</li>
                    {categoryList.sort((a, b) => (a > b) ? 1 : -1).map((product, index) => (
                        <div key={index} className="brand">
                            <input type="radio" id="dewey" name="drone" value={product}
                                onChange={e => setselectedBrand(e.target.value)} />
                            <label for="dewey">{product}</label>
                          
                        </div>
                    ))}


                </ul>
            </div>
            <div className='productDiv'>

                <div className='name-sort'>
                    {nameLink === '/' ?
                        <div className='name'>
                            <h1>ALL PRODUCTS</h1>
                            <p>Choose your product!</p>
                        </div>
                        : nameLink === '/phone' ?
                            <div className='name'>
                                <h1>PHONE</h1>
                                <p>Choose your phone!</p>
                            </div>
                            : nameLink === '/desktop' ?
                                <div className='name'>
                                    <h1>desktop</h1>
                                    <p>Choose your desktop!</p>
                                </div>
                                : nameLink === '/mouse' ?
                                    <div className='name'>
                                        <h1>mouse</h1>
                                        <p>Choose your mouse!</p>
                                    </div>
                                    : nameLink === '/keyboard' ?
                                        <div className='name'>
                                            <h1>keyboard</h1>
                                            <p>Choose your keyboard!</p>
                                        </div>
                                        : <div className='name'>
                                            <h1>laptop</h1>
                                            <p>Choose your laptop!</p>
                                        </div>
                    }


                    <div className='sort'>

                        <label for="sorting">Sort by: </label>
                        <select name="sorting" id="sorting" value={selectedOption}
                            onChange={e => setselectedOption(e.target.value)}>
                            <option value="Az" selected>A-Z</option>
                            <option value="Za"  >Z-A</option>
                            <option value="Low" >Price low</option>
                            <option value="High"  >Price high</option>
                        </select>
                    </div>
                </div>

                <div className='list-of-product'>


                    {data.slice(0, next).map((phone, index) => (

                        <div className='div-product' key={index}>


                            <h3 className='title' >{phone.title}</h3>
                            <div className='product-img'>

                                <img src={phone.thumbnail} alt="product" />
                            </div>
                            <div className='price-stars'>
                                <p className='price'>{phone.price}$</p>
                                <p>STARS</p>
                            </div>
                            <p className='descr'>{phone.description}</p>
                            <br />
                            <div className='div-order'>

                                <button onClick={order} className='order'>ORDER NOW</button>
                            </div>
                        </div>
                    ))}


                </div>

                <div className='load-more-div'>

                    {next < data.length && (
                        <button className="load-more" onClick={handleMoreProducts} >Load more</button>
                    )}
                </div>
            </div>
        </div>


    )
}


export default Product;
