import React from 'react';
import { PropTypes } from 'prop-types'
import FriendCard from './components/FriendCard'
	//Iterate through our list of images

const ClickImages = props => {
	return <div>
		{props.friend.map(minion => {
			return (<FriendCard 
				key = {friend.id}
				id= {friend.id} 
	  			clicked={friend.clicked}
	  			changeClickState={() => props.toggleClickedState(friend.id)}
	  			image = {friend.image}
	  		/>) }
			)
		    /*create element groups with size 3, result looks like:
		    [[elem1, elem2, elem3], [elem4, elem5, elem6], ...]*/
			.reduce(function(r, element, index) {
		        index % props.groupSize === 0 && r.push([]);
		        r[r.length - 1].push(element);
		        return r;
		    }, [])
		    .map(function(rowContent) {
		        // surround every group with 'row'
		        return (
		        <div className="row" key={Math.floor(Math.random() * 1000000)}>
		        	{rowContent}
		        </div>
		        )
		    })
		}	
	</div>
}

export default ClickImages;