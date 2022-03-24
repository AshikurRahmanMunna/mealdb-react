import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeals(data.meals));
    }, [])
    const [mealName, setMealName] = useState('');
    const showMealName = (mealId) => {
        const find = meals.find(meal => meal.idMeal === mealId)
        if(find) {
            const strMeal = find.strMeal;
            setMealName(strMeal);
            return strMeal;
        }
    }
    return (
        <div className='all'>
            <div className='meals'>
                {
                    meals.map(meal => <Meal 
                        meal={meal} 
                        key={meal.idMeal} 
                        showMealName={showMealName}
                        ></Meal>)
                }
            </div>
            <div className="side">
                <p>Name: {mealName}</p>
            </div>
        </div>
    );
};

export default Meals;