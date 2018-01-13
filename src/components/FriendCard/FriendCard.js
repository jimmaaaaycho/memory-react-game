import React from "react";
import "./FriendCard.css";
import PropTypes from 'prop-types';


const FriendCard = props => (
  <div className="card">
    <div className="img-container" 
    	 id={props.id}
    	 onClick={() => { props.changeClickState('clicked', props.id) }}
    	 >
      <img className="img-resp" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default FriendCard;