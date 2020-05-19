import React from 'react';
import '../App.css';

export default function Event(props) {

    
    let toContainerId="event-container";

    if (props.location.swapDisplayCallback !== undefined) {
        props.location.swapDisplayCallback(toContainerId, props);
    }

    return (  
        <div id={toContainerId}>
            <p className="designer-desc">Abbey, florist and chief bargain hunter behind the boutique, has made it a real curiosity shop known for its character-filled bouquets, which often incorporate unusual plants and colors. “Our clients are often looking for the style typified by our shop– a little odd but genuine, bouquets that are the stuff of dreams,” They tell us, having decorated catwalks and created sumptuous decor for famous names like the Opéra Garnier, Dior, and Cartier. “We have an overall vision of flowers which we perceive as being a part of the whole, like a plant in an English-style garden”.</p>
        </div>
    )
}
