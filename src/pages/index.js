import React, { useEffect, useState } from "react";

import eventService from "../services/event.service";

export default function Auth() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    eventService.getEvents()
    .then((res) =>{
      setEvents(res.data)
    } )
  }, []);
  return <div className="main">
    <h1>Liste Events</h1>
    {events &&
        events.map((event) => (
          <h1 key={event.id}>{event.attributes.title}</h1>
        ))}
    
     
    

  </div>;
}