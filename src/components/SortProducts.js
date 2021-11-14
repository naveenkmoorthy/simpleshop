import React, { useContext } from 'react'
import { Store } from '../store/store';

function SortProducts() {
    const { state: {sortBy}, dispatch } = useContext(Store);

    function handleChange(e){
        const value = e.target.value
        dispatch({sortBy: value});
    }

    return (
        <div className="sort">
            Sort Products 
            <select onChange={e => handleChange(e)}>
                <option value="">Select</option>
                <option value="lowest">Lowest to highest</option>
                <option value="highest">Highest to lowest</option>
            </select>
        </div>
    )
}

export default SortProducts
