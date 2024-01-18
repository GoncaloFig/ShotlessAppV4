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
    </Provider>
  );
}

export default App;
