import '../css file/Meals.css';
import NavBar from "../components/NavBar";
import MealForm from "../components/Forms/Mealform";
import Footer from '../components/Footer';
import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Meal() {
  const { user } = useContext(AuthContext);
  console.log(user)
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  };
  const [Meals, setMeals] = useState([]);
 
  useEffect(() => {
    async function fetchMeals() {
      try {
        const response = await axios.get('http://localhost:8070/meal',config);
        setMeals(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchMeals();
  }, []);

  console.log(user);
  const navigate = useNavigate();
  if (!user || user.role !== 'kitchen') {
      navigate('/login');
      return null;
    }
  
  
  return (
    <div>
      <div className="navBarContainor">
        <NavBar />
      </div>
      <div className="MealDetailsArea">
        <div className="h2Holder">
          <h2>
            <b>Meal Details Form</b>
          </h2>
        </div>
        <div className="formOneContainorMeal">
        <div className="MealForm">
            <MealForm />
          </div>
          <div className="existingMeal">
              <ul>
                {Meals.map((meal) => (
                  <div key={meal.mealID} className="existingMealCard">
                    <p>{meal.mealID} {meal.mealName}</p>
                    <p>{meal.mealType}</p>
                  </div>
                ))}
              </ul>
          </div>
        </div>
      </div>
      <div className="footerContainorMeal">
        <Footer />
      </div>
    </div>
  );
}export default Meal;