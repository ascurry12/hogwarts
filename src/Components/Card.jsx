import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom';

const Card = (props) =>  {
    const houseEmojis = {
        Gryffindor: "🦁",
        Slytherin: "🐍",
        Hufflepuff: "🦡",
        Ravenclaw: "🦅"
    }
  return (
      <div className="Card" style={{backgroundColor: props.color, color: props.house == "Hufflepuff" ? 'black' : 'white'}}>
          <h2 className="name">{props.name}</h2>
          <h3 className="house">{houseEmojis[props.house]} House of {props.house} {houseEmojis[props.house]}</h3>
          <p className="year">Year {props.year}</p>
          <div>
              <Link className='card-button' style={{ color: "white"}} to={`/edit/${props.id}`}>Edit</Link>
              <Link className='card-button' style={{ color: "white"}} to={`/detail/${props.id}`}>Details</Link>
          </div>
      </div>
  );
};

export default Card;