import React from 'react'
import PlayerBadge from './PlayerBadge';
import { useSelector } from 'react-redux';


const PlayersContainer = ({handleOpenEditPlayers}) => {

    const players = useSelector(state => state.player.players);
    //const [players, setPlayers] = useState(props.players)

    const handleLoadPlayers = players.map((playerItem, index) =>
        <PlayerBadge key={playerItem.id} data-key={playerItem.id} value={playerItem.name}/>
    );

    return (
        <div className="playersContainer">
            <div className="playersListContainer">
                <div className="playersListOverflow">
                    {/* <PlayerBtn/> */}
                    {players.length > 0 ? (
                        handleLoadPlayers
                    ) : (
                    <div className="noPlayersDiv">
                        <p>You need to add some players</p>
                    </div>
                    )}
                </div>
            </div>
            <div className="addPlayerContainer">
                {/* <button onClick={function(){ openEditPlayers()}} className="addPlayerBtn}><FaPlus/></button> */}
                <button onClick={handleOpenEditPlayers} className="addPlayerBtn">Add</button>
            </div>
        </div>
    )
}

export default PlayersContainer
