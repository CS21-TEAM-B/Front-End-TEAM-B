import React from "react";

const SideMenu = props => {
  console.log(props);
  const players = props.details.players;

  console.log(players);

  if (props.details) {
    return (
      <div className='side-menu'>
        <div className='player-stats'>
          <h3>{props.details.title}</h3>
          <p>{props.details.description}</p>
        </div>
        <div className='players'>
          <h3>Players Here:</h3>
          {players
            ? players.map(player => <p>{player}</p>)
            : "No players currently here"}
        </div>
        <div className='chat'>bottom menu</div>
      </div>
    );
  } else {
    return <div className='side-menu'>LOADING...</div>;
  }
};

export default SideMenu;
