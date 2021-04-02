import React from 'react';

// Data
import { events } from "../../mockData";

// Components
import Card from "../../components/Card";

// CSS
import "./cardsContainer.css";

const CardsContainer = () => {

    const renderCards = () => {
        return events.map((event, index) => {
            return (
                <Card key={index} event={event}/>
            )
        })
    }

 return (
     <div className="workout-container">
         <h1>
             Workouts
         </h1>
         <div className="cards-container">
             {renderCards()}
         </div>
     </div>
 )
}

export default CardsContainer;