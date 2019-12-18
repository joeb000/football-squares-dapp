import React from 'react';

export default class Events extends React.Component {
    render() {
        let list = ["e1", "e2", "e4"]
        return (
          <div className="events-container">

            <EventList events={list}/>
          </div>
        );
      }
}


function EventList(props) {
    const events = props.events;
    const listItems = events.map((e) =>
      <li>{e}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
}