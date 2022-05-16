import React from 'react';

const CardEvent = (props) => {
    return (
        <div>
            Titre: {props.event.title} <br/>
            Location: {props.event.location} <br/>
            Category: {props.category }
        </div>
    );
}

export default CardEvent;
