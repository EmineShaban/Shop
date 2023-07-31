import './ListOfProducts.css';
import data from '../data.json'
 import ListOfProducts from './ListOfProducts';

function Laptop() {
    let mouses = []


    data.map(data => {
        if (data.category === 'mouse') {
            mouses.push(data)
        }
        return mouses

    })

    return (
        <div>
            <ListOfProducts sortArr={mouses} />
        </div>
    )
}


export default Laptop;
