import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 4
const AddFoodForm = ({ food, setFood, foods, setFoods, hide }) => {

    const handleTextChange = (e) => {

        setFood((recent) => ({ ...recent, [e.target.name]: e.target.value}))

        
      }

    const handleNumberChange = (e) => {

        setFood((recent) => ({ ...recent, [e.target.name]: Number(e.target.value)}))

        
      }
    
    const handleSubmit = (e) => {
        e.preventDefault()

        setFoods([food, ...foods])
        
        setFood({
            name: '',
            calories: Number,
            image: '',
            servings: Number
        })

        

    }

    
  return (
    <form className={hide ? 'hidden': ''} style={{width: "30%"}} onSubmit={handleSubmit}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input name='name' type="text" value={food.name} onChange={handleTextChange} />

      <label>Image</label>
      <Input name='image' type="text" value={food.image} onChange={handleTextChange} /> 

      <label>Calories</label>
      <Input name='calories' type="number" value={food.calories} onChange={handleNumberChange}/> 

      <label>Servings</label>
      <Input name='servings' type="number" value={food.servings} onChange={handleNumberChange}/> 

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;