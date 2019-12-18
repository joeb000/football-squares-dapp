import React from 'react';
import { Link } from "@reach/router"
import { MyWeb3Consumer } from '../../Web3Context';

const Events = (props) => (
  <MyWeb3Consumer>
    {({ gameList }) => {
      return (
        <div className="events-container">
          <EventList events={gameList} />
        </div>
      )
    }}
  </MyWeb3Consumer>
);



function EventList(props) {
  const events = props.events;

  const listItems = events.map((e) =>
    <li key={e.gameId} ><Link to={"/game/" + e.gameId}>{e.metadata}</Link></li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default Events;
