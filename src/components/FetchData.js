import React, { useEffect } from 'react';
import { useState } from 'react';
import LoadData from './LoadData.js';

const FetchData = () => {
    const [foods,setFood] = useState([])
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then(res=>res.json())
        .then(data=>setFood(data.meals))
    },[])
    return (
        <div className='d-flex flex-wrap justify-content-between' >
            {
               foods.map(food => <LoadData key={food.idMeal} img={food.strMealThumb} name={food.strMeal}> </LoadData>)
            }
        </div>
    );
};

export default FetchData;