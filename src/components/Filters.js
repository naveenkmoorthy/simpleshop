import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../store/store';
import Checkbox from './Checkbox';

function Filters() {
    const [categories, setCategores] = useState([]);
    const { state: {filters}, dispatch } = useContext(Store);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then(res => {
                setCategores(res.data)
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    function handleChange(e){
        const value = e.target.value
        const newFilters = [...filters]
        if(e.target.checked === true){
            newFilters.push(e.target.value)
        }else{
            newFilters.splice(newFilters.indexOf(e.target.value), 1)
        }
        dispatch({filters: newFilters})
    }

    return (
        <div className="filters">
            {categories.map((category, index) => (
                <Checkbox label={category} key={index} onChange={e => handleChange(e)} />
            ))}
        </div>
    )
}

export default Filters
