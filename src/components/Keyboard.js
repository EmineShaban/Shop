import './ListOfProducts.css';
import data from '../data.json'
 import ListOfProducts from './ListOfProducts';

function Laptop() {
    let keyboards = []
    data.map(data => {
        if (data.category === 'keyboard') {
            keyboards.push(data)
        }
        return keyboards

    })

    return (
        <div>
            <ListOfProducts sortArr={keyboards} />
        </div>
  )
}


export default Laptop;
