import React, { Fragment } from 'react';

// Images
import timer from "../../assets/timer-icon.png";
import track from "../../assets/track-icon.png";

// CSS
import "./card.css";

// Components
import ViewDetails from "../ViewDetails";

const Card = (props) => {
    const { event } = props

    const renderWorkoutDuration = (event) => {
       if (event.duration) {
            return (
              <Fragment>
                <img alt="timer" src={timer} />
                  <span>
                     <p>
                      {event.duration}
                     </p>
                  </span>
              </Fragment>
            )
        }
    }

    const renderWorkoutDistance = (event) => {
        if (event.distance) {
             return (
               <Fragment>
                 <img alt="timer" src={track} />
                   <span>
                      <p>
                       {event.distance} M
                      </p>
                   </span>
               </Fragment>
             )
         }
     }
    return (
        <div className="card">
            <div className="card-background">
                <img alt="exercise" src={event.thumbnail} />
            </div>
            <div>
            <div className="workout-title">
                <p>{event.name}</p>
                <img alt="event" src={event.image}/>
            </div>
            <div className="workout-info">
                {renderWorkoutDuration(event)}
                {renderWorkoutDistance(event)}
            </div>
            <div>
                {event.details && <ViewDetails />}
            </div>
            </div>
        </div>
    )
};

export default Card;
