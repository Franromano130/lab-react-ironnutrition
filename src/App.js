import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import data from "./foods.json";
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';

function App() {

  const [ foods, setFoods ] = useState(data)
  const [ food, setFood ] = useState({
    name: '',
    calories: Number,
    image: '',
    servings: Number
  })

  const [ hide, setHide] = useState(false)

  const [ searchInput, setSearchInput ] = useState('')

  let filtered = searchInput ? [...foods].filter(food => food.name.toLowerCase().includes(searchInput.toLowerCase())) : foods



  return (
    <div className="App">

      <div className='top'>

        {!hide && <AddFoodForm  food={food} setFood={setFood} foods={foods} setFoods={setFoods} /> }

        <Button onClick={()=>setHide(!hide)}> Hide Form / Add New Food </Button>

        <Search setSearchInput={setSearchInput} />

      </div>


      <Divider>Food List</Divider>


        <Row style={{ width: '100%', justifyContent: 'center' }}>

            
            {
              filtered.map((food) => {
                return <FoodBox key={food.name} food={food} foods={foods} setFoods={setFoods} />
              })
            }

        </Row>


        {!filtered.length && <h3>There is no more food to show.</h3>}



    </div>
  );
}

export default App;

