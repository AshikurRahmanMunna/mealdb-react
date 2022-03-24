import React from 'react';
import './Meal.css';

const Meal = (props) => {
    const {meal, showMealName} = props;
    const {idMeal, strMeal, strMealThumb, strInstructions} = meal;
    return (
        <div className='meal'>
            <h2>{strMeal}</h2>
            <img src={strMealThumb} alt="" />
            <p>{strInstructions}</p>
            <button onClick={() => showMealName(idMeal)}>Show Meal</button>
        </div>
    );
};

export default Meal;