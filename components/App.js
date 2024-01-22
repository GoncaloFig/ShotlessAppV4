// components/App.js
import React from 'react';
import GameContainer from './GameContainer';
import store from '../redux/store/store';
import { Provider } from 'react-redux';
import { useState } from 'react';
import EditPlayersContainer from './EditPlayersContainer'
import PlayersContainer from './PlayersContainer'


function App() {

    const [visibleEditPlayers, setVisibleEditPlayers] = useState(false);

    const handleOpenEditPlayers = () => {
      setVisibleEditPlayers((prev) => !prev);
    }

  return (
    <Provider store={store}>
        <div className="App">
        {/* <h1>Hello from App component!</h1>
        <p>This content is rendered on the server side.</p> */}
        <GameContainer/>
        {visibleEditPlayers ? (<EditPlayersContainer handleOpenEditPlayers={handleOpenEditPlayers}/>) : (<PlayersContainer handleOpenEditPlayers={handleOpenEditPlayers}/>)}
        {/* {visibleEditPlayers ? (<PlayersContainer handleOpenEditPlayers={handleOpenEditPlayers}/>) : null} */}
        </div>

        {/* SEO PERFORM */}
        <div className='hidden' style={{display: 'none'}}>
          <h2 className='hidden'>Generate a random person to pay the bill</h2>
          <h2 >Who will pay the bill</h2>
          <h3 >Pick a random person to pay the bill</h3>
          <h4 >Choose a random person to pay the bill, with Shotless game</h4>
          <h5 >Draw names to pay the bill</h5>
          <h6 >This game will generate a random player from a list of player that will be responsible to pay the restaurant or coffee bill</h6>
        </div>
    </Provider>
  );
}

export default App;
