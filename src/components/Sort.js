import { useState } from "react";

function Sort({
    data
}) {
    console.log(data)
// const info = Object.values(data)
    const [selectedFruit, setSelectedFruit] = useState('orange');
    console.log(selectedFruit)
    if (selectedFruit == "Za") {
        console.log('Zaaaaa')
        console.log(data)

        // data.sort((a, b) => a - b);
        return data

    } else if (selectedFruit == "Low") {
        console.log('lowwww')
    }
    return (
        <div>

            <label for="sorting">Sort by:</label>
            <select name="sorting" id="sorting" value={selectedFruit}
                onChange={e => setSelectedFruit(e.target.value)}>
                <option value="Az" selected>A-Z</option>
                <option value="Za"  >Z-A</option>
                <option value="Low"  >Price low</option>
                <option value="High"  >Price high</option>
            </select>
        </div>
    )
}


export default Sort;
