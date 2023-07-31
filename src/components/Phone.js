import data from '../data.json'
import ListOfProducts from './ListOfProducts';
function Phone() {
    let phones = []


    data.map(data => {
        if (data.category === 'smartphones') {
            phones.push(data)
        }
        return phones

    })

    return (
        <div>
            <ListOfProducts sortArr={phones} />
        </div>


    )
}


export default Phone;
