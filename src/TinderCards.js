import React, { useState ,useEffect} from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function TinderCards() {
  const [People, setPeople] = useState([]);

  useEffect(() =>{
    async function fetchData() {
      const req = await axios.get('./tinder/card');
      setPeople(req.data);
      console.log(req.data)
  
    }
    fetchData();
  },[])

  const swiped = (direction, nameToDelete) => {
    console.log("removing " + nameToDelete);
    // setLastDirection(direction)
  };

  const outOfFrame = (name) => {
    console.log(name);
  };

  return (
    <div className="tinder_cards">
      <div className="tinderCards_container">
        {People.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.imgUrl})`  }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard> 
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
